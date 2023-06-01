import pdfTemplate from "./document/index.mjs";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import chromium from "@sparticuz/chromium";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer-core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pdfUploadToServer = async ({ id }) => {
  try {
    var data = new FormData();
    data.append("files", fs.createReadStream(`/tmp/${id}.pdf`));
    var config = {
      method: "post",
      url: `https://${process.env.PARSE_ENDPOINT}/parse/files/${id}.pdf`,
      headers: {
        "X-Parse-Master-Key": process.env.MASTER_KEY,
        "X-Parse-Application-Id": process.env.APPLICATION_ID,
        ...data.getHeaders(),
      },
      data: data,
    };
    const result = await axios(config);
    return result.data;
  } catch (error) {
    throw error;
  }
};

const createPdf = async (
  data,
  templateType,
  textSignature,
  id,
  ipAddress,
  signedAgreement
) => {
  try {
    // console.log(data);
    // console.log(data.offers);
    const htmlString = pdfTemplate(
      data,
      templateType,
      textSignature,
      ipAddress,
      signedAgreement
    );
    console.log("htmlString", htmlString);

    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });
    const tab = await browser.newPage();
    await tab.setContent(htmlString);
    if (templateType == 1) await tab.setViewport({ width: 612, height: 792 });
    else await tab.setViewport({ width: 612, height: 792 });
    await tab.addStyleTag({
      content: "@media print { section { page-break-after: always; } }",
    });
    await tab.evaluate(() => {
      const totalPages = document.querySelectorAll(".page").length;
      const footer = document.createElement("footer");
      const pageNumberImg = document.createElement("img");
      pageNumberImg.src = "path_to_your_image.png"; // Replace with the path to your image
      footer.appendChild(pageNumberImg);
      document.body.appendChild(footer);
    });

    let arr;
    if (templateType == 1) {
      arr = await tab.pdf({
        path: `/tmp/${id}.pdf`,
        displayHeaderFooter: true,
        footerTemplate:
          '<footer id="footer-template" style="width: 100%; text-align: center;"></footer>',
        margin: { top: 60, right: 72, bottom: 60, left: 72 },
      });
    } else {
      arr = await tab.pdf({
        path: `/tmp/${id}.pdf`,
        displayHeaderFooter: true,
        footerTemplate:
          '<footer id="footer-template" style="width: 100%; text-align: center;"></footer>',
        margin: { top: 40, right: 72, bottom: 40, left: 72 },
      });
    }
    console.log(arr);
    // console.log(arr);
    const result = await pdfUploadToServer({ id });
    // console.log(result);
    const str1 = result.url.substring(0, 4);
    const str2 = result.url.substring(4);
    result.url = str1 + "s" + str2;
    await browser.close();
    return result;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

export default createPdf;
