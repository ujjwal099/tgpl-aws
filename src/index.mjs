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
    await tab.setContent(htmlString, { waitUntil: "networkidle0" });
    if (templateType == 1) await tab.setViewport({ width: 612, height: 792 });
    else await tab.setViewport({ width: 612, height: 792 });
    await tab.addStyleTag({
      content: "@media print { section { page-break-after: always; } }",
    });

    if (textSignature) {
      let totalPages = 1; // Default to 1 if page count is not available
      const pageCountElement = await tab.$(".page-count");
      if (pageCountElement) {
        const pageCountText = await tab.evaluate(
          (element) => element.textContent,
          pageCountElement
        );
        totalPages = parseInt(pageCountText) || 1;
      }
      // Add signature to each page
      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        // Go to the specific page
        const goToPageInput = await tab.$(".go-to-page");
        const goToPageButton = await tab.$(".go-to-page-button");
        if (goToPageInput && goToPageButton) {
          await goToPageInput.type(pageNumber.toString());
          await goToPageButton.click();
        } else {
          console.error(
            `Elements for page navigation not found on page ${pageNumber}. Skipping signature for this page.`
          );
          continue;
        }

        // Wait for the page to render
        await tab.waitForTimeout(1000); // Adjust the timeout if needed

        // Add the signature image to the page
        await tab.evaluate((textSignature) => {
          const img = new Image();
          img.src = textSignature;
          img.style.position = "absolute";
          img.style.top = "10px"; // Adjust the position of the signature
          img.style.left = "10px"; // Adjust the position of the signature
          img.style.width = "100px"; // Adjust the size of the signature
          img.style.height = "50px"; // Adjust the size of the signature
          document.body.appendChild(img);
        }, textSignature);
      }
    }
    let arr;
    if (templateType == 1) {
      arr = await tab.pdf({
        path: `/tmp/${id}.pdf`,
        margin: { top: 60, right: 72, bottom: 60, left: 72 },
      });
    } else {
      arr = await tab.pdf({
        path: `/tmp/${id}.pdf`,
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
