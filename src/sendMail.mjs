import nodemailer from "nodemailer";
import mandrillTransport from "nodemailer-mandrill-transport";
import "dotenv/config";
import AxiosUtils from "./utils/AxiosUtils/axiosUtils.mjs";
import axios from "axios";

function dateToYMD(date) {
  var d = date.getDate();
  var m = date.getMonth() + 1; //Month from 0 to 11
  var y = date.getFullYear();
  return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
}

export const sendMailPromise = (options) => {
  var transporter = nodemailer.createTransport(
    mandrillTransport({
      auth: {
        apiKey: process.env.API_KEY || "GQQFb88GVJqao8cgBfBHfg",
      },
    })
  );
  return new Promise((resolve, reject) => {
    transporter.sendMail(options, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};

const sendMail = async (
  email,
  authEmail,
  spocEmail,
  isSigning,
  password,
  brandName,
  merchantName,
  authName,
  locallySigned,
  agreement,
  mailChange,
  country
) => {
  try {
    const today = dateToYMD(new Date());
    let configAuth;
    let configSpoc;
    let configSale;

    const emailSubmitAuth = JSON.stringify({
      typeOfComms: 0,
      typeOfMessage: 10,
      requests: {
        programCode: "TGPL",
        userId: ["Dummy"],
        message: 10,
        payload: {
          email: authEmail,
          authEmail: authEmail,
          password: password,
          merchantName: merchantName,
          brandName: brandName,
          today: today,
          authName: authEmail,
          link: agreement,
          communicationCode: "email_submit_auth",
        },
      },
    });

    const emailSubmitSpoc = JSON.stringify({
      typeOfComms: 0,
      typeOfMessage: 10,
      requests: {
        programCode: "TGPL",
        userId: ["Dummy"],
        message: 10,
        payload: {
          email: spocEmail,
          merchantName: merchantName,
          brandName: brandName,
          today: today,
          authName: authEmail,
          link: agreement,
          communicationCode: "email_submit_spoc",
        },
      },
    });

    const emailSubmitSale = JSON.stringify({
      typeOfComms: 0,
      typeOfMessage: 10,
      requests: {
        programCode: "TGPL",
        userId: ["Dummy"],
        message: 10,
        payload: {
          email: email,
          merchantName: merchantName,
          brandName: brandName,
          today: today,
          authName: authName,
          link: agreement,
          communicationCode: "email_submit_sale",
        },
      },
    });

    const emailSignedAuth = JSON.stringify({
      typeOfComms: 0,
      typeOfMessage: 9,
      requests: {
        programCode: "TGPL",
        userId: ["Dummy"],
        message: 9,
        payload: {
          email: authEmail,
          authEmail: authEmail,
          merchantName: merchantName,
          brandName: brandName,
          today: today,
          authName: authName,
          link: agreement,
          communicationCode: "email_signed_auth",
        },
      },
    });

    const emailSignedSpoc = JSON.stringify({
      typeOfComms: 0,
      typeOfMessage: 9,
      requests: {
        programCode: "TGPL",
        userId: ["Dummy"],
        message: 9,
        payload: {
          email: spocEmail,
          merchantName: merchantName,
          brandName: brandName,
          today: today,
          authName: authName,
          link: agreement,
          communicationCode: "email_signed_spoc_sale",
        },
      },
    });

    const emailSignedSale = JSON.stringify({
      typeOfComms: 0,
      typeOfMessage: 9,
      requests: {
        programCode: "TGPL",
        userId: ["Dummy"],
        message: 9,
        payload: {
          email: email,
          merchantName: merchantName,
          brandName: brandName,
          today: today,
          authName: authName,
          link: agreement,
          communicationCode: "email_signed_spoc_sale",
        },
      },
    });

    if (mailChange == "Yes") {
      if (isSigning === "true") {
        configAuth = AxiosUtils.axiosConfigConstructor(
          "post",
          "https://staging-india-api-gateway.thriwe.com/communications",
          emailSignedAuth,
          {
            "Content-Type": "application/json",
          },
          country,
          null
        );
      } else {
        configAuth = AxiosUtils.axiosConfigConstructor(
          "post",
          "https://staging-india-api-gateway.thriwe.com/communications",
          emailSubmitAuth,
          {
            "Content-Type": "application/json",
          },
          country,
          null
        );
      }
    } else {
      if (locallySigned || isSigning == "true") {
        console.log("Check If The Siging", locallySigned, isSigning);
        configAuth = AxiosUtils.axiosConfigConstructor(
          "post",
          "https://staging-india-api-gateway.thriwe.com/communications",
          emailSignedAuth,
          {
            "Content-Type": "application/json",
          },
          country,
          null
        );
        configSpoc = AxiosUtils.axiosConfigConstructor(
          "post",
          "https://staging-india-api-gateway.thriwe.com/communications",
          emailSignedSpoc,
          {
            "Content-Type": "application/json",
          },
          country,
          null
        );
        configSale = AxiosUtils.axiosConfigConstructor(
          "post",
          "https://staging-india-api-gateway.thriwe.com/communications",
          emailSignedSale,
          {
            "Content-Type": "application/json",
          },
          country,
          null
        );
      } else {
        console.log("Check For Submit");
        configAuth = AxiosUtils.axiosConfigConstructor(
          "post",
          "https://staging-india-api-gateway.thriwe.com/communications",
          emailSignedAuth,
          {
            "Content-Type": "application/json",
          },
          country,
          null
        );
        configSpoc = AxiosUtils.axiosConfigConstructor(
          "post",
          "https://staging-india-api-gateway.thriwe.com/communications",
          emailSubmitSpoc,
          {
            "Content-Type": "application/json",
          },
          country,
          null
        );
        configSale = AxiosUtils.axiosConfigConstructor(
          "post",
          "https://staging-india-api-gateway.thriwe.com/communications",
          emailSubmitSale,
          {
            "Content-Type": "application/json",
          },
          country,
          null
        );
      }
    }
    await axios(configAuth);
    await axios(configSpoc);
    await axios(configSale);
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
