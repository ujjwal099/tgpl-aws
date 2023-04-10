import createPdf from "./src/index.mjs";
import fs from "fs";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";
import sendMail from "./src/sendMail.mjs";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handler = async (event) => {
  // TODO implement
  // console.log(event);
  const {
    data,
    templateType,
    textSignature,
    noremail,
    authEmail,
    spocEmail,
    isSigning,
    password,
    fileToBeDeletedName,
    brandName,
    merchantName,
    authName,
    ipAddress,
  } = JSON.parse(event.body);
  const id = Date.now();
  console.log("body",JSON.parse(event.body));
  if (noremail && authEmail && spocEmail) {
    // console.log(noremail);
    await sendMail(
      noremail,
      authEmail,
      spocEmail,
      isSigning,
      password,
      brandName,
      merchantName,
      authName
    );
    // console.log(noremail);
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
      },
      body: `Mail send successfully`,
    };
    return response;
  } else {
    const ans = await createPdf(
      data,
      templateType,
      textSignature,
      id,
      ipAddress
    );
    if (fileToBeDeletedName !== undefined) {
      try {
        var config = {
          method: "delete",
          url: `https://${process.env.PARSE_ENDPOINT}/parse/files/${fileToBeDeletedName}`,
          headers: {
            "X-Parse-Master-Key": process.env.MASTER_KEY,
            "X-Parse-Application-Id": process.env.APPLICATION_ID,
          },
        };
        await axios(config);
      } catch (error) {
        throw error;
      }
    }
    fs.unlink(`/tmp/${id}.pdf`, function (err) {
      if (err) throw err;
    });
    const response = {
      statusCode: 200,
      body: JSON.stringify(ans),
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
      },
    };
    return response;
  }
};
