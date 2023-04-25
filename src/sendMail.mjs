import nodemailer from "nodemailer";
import mandrillTransport from "nodemailer-mandrill-transport";
import "dotenv/config";

function dateToYMD(date) {
  var d = date.getDate();
  var m = date.getMonth() + 1; //Month from 0 to 11
  var y = date.getFullYear();
  return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
}

const sendMailPromise = (options) => {
  var transporter = nodemailer.cretePool(
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
  authName
) => {
  try {
    const today = dateToYMD(new Date());
    const options1 = {
      from: "noreply@thriwe.com",
      to: authEmail,
      subject: `${
        isSigning == "false"
          ? `MOU is submitted for Digital Signatures - ${brandName}`
          : `MOU is successfully signed - ${brandName}
`
      }`,
      text: `wow thats sample `,
      html: `
      ${
        isSigning == "false"
          ? `
        <p>Dear User,</p>
        <p>An MOU is successfully submitted for ${brandName}. Please login to below mention Platform URL and digitally
sign the MOU.</p>
        <p>AuthEmail : ${authEmail} </p>
        <p> Password : ${password} </p>
        <p>Platform URL: <a href="https://tgpl-crm.thriwe.com/">https://tgpl-crm.thriwe.com</a></p>
        <p> Merchant Name: ${merchantName} </p>
        <p> Brand Name: ${brandName} </p>
        <p> Date of Signing: ${today} </p>
        <p> Authorised Signatory: ${authName} </p>
        <p>Thanks, </p>
        <p>Team Thriwe </p>
          `
          : `
        <p>Dear User,</p>
        <p>MOU is successfully signed for ${brandName}. We have enclosed the signed MOU for reference.</p>
        <p>AuthEmail : ${authEmail} </p>
        <p> Password : ${password} </p>
        <p>Platform URL: <a href="https://tgpl-crm.thriwe.com/">https://tgpl-crm.thriwe.com</a></p>
        <p> Merchant Name: ${merchantName} </p>
        <p> Brand Name: ${brandName} </p>
        <p> Date of Signing: ${today} </p>
        <p> Authorised Signatory: ${authName} </p>
        <p>Thanks, </p>
        <p>Team Thriwe </p>
          `
      }
       `,
    };
    const options2 = {
      from: "noreply@thriwe.com",
      to: spocEmail,
      subject: `${
        isSigning == "false"
          ? `A form is submitted for ${brandName}`
          : `MOU is successfully signed - ${brandName}
`
      }`,
      text: `wow thats sample `,
      html: `
      ${
        isSigning == "false"
          ? `
         <p>Dear User,</p>
         <p>A form is successfully submitted for <Brand Name>.</p>
         <p>Platform URL: <a href="https://tgpl-crm.thriwe.com/">https://tgpl-crm.thriwe.com</a></p>
         <p> Merchant Name: ${merchantName} </p>
         <p> Brand Name: ${brandName} </p>
         <p> Date of Submission: ${today} </p>
         <p> Authorised Signatory: ${authName} </p>
         <p>We will send communication post signing of agreement.</p>
         <p>Thanks, </p>
         <p>Team Thriwe </p>
          `
          : `
         <p>Dear User,</p>
         <p>MOU is successfully signed for ${brandName}. We have enclosed the signed MOU for reference.</p>
         <p>Platform URL: <a href="https://tgpl-crm.thriwe.com/">https://tgpl-crm.thriwe.com</a></p>
         <p> Merchant Name: ${merchantName} </p>
         <p> Brand Name: ${brandName} </p>
         <p> Date of Signing: ${today} </p>
         <p> Authorised Signatory: ${authName} </p>
         <p>Thanks, </p>
         <p>Team Thriwe </p>
          `
      }
       `,
    };
    const options3 = {
      from: "noreply@thriwe.com",
      to: email,
      subject: `${
        isSigning == "false"
          ? `A form is submitted for ${brandName}`
          : `MOU is successfully signed - ${brandName}
`
      }`,
      text: `wow thats sample `,
      html: `
      ${
        isSigning == "false"
          ? `
         <p>Dear User,</p>
         <p>A form is successfully submitted for <Brand Name>.</p>
         <p>Platform URL: <a href="https://tgpl-crm.thriwe.com/">https://tgpl-crm.thriwe.com</a></p>
         <p> Merchant Name: ${merchantName} </p>
         <p> Brand Name: ${brandName} </p>
         <p> Date of Submission: ${today} </p>
         <p> Authorised Signatory: ${authName} </p>
         <p>You will be notified once Merchant signs the agreement.</p>
         <p>Thanks, </p>
         <p>Team Thriwe </p>
          `
          : `
         <p>Dear User,</p>
         <p>MOU is successfully signed for ${brandName}. We have enclosed the signed MOU for reference.</p>
         <p>Platform URL: <a href="https://tgpl-crm.thriwe.com/">https://tgpl-crm.thriwe.com</a></p>
         <p> Merchant Name: ${merchantName} </p>
         <p> Brand Name: ${brandName} </p>
         <p> Date of Signing: ${today} </p>
         <p> Authorised Signatory: ${authName} </p>
         <p>Thanks, </p>
         <p>Team Thriwe </p>
          `
      }
       `,
    };
    const promises = [
      sendMailPromise(options1),
      sendMailPromise(options2),
      sendMailPromise(options3),
    ];
    console.log("Email Pending")
    await Promise.all(promises)
      .then((results) => {
        console.log("All emails sent:", results);
      })
      .catch((err) => {
        console.error("Error sending emails:", err);
      });
  } catch (error) {
    // console.log(error);
  }
};

export default sendMail;
