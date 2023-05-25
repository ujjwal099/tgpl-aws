import axios from "axios";
import { sendMailPromise } from "./sendMail.mjs";

const sendCode = async (phone, code) => {
  var data = {
    uname: process.env.UNAME,
    pass: process.env.PASS,
    send: "THRIWE",
    dest: `+91${phone}`,
    msg: `Hi,${code} is your OTP to verify your mobile number. OTP Code is valid for 10 minutes. THRIWE`,
  };
  var config = {
    method: "post",
    url: "https://fastsms.way2mint.com/SendSMS/sendmsg.php",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };
  await axios(config);
  return;
};

const sendOtp = async (phone, mail) => {
  const code = String(Math.floor(100000 + Math.random() * 900000));
  await sendCode(phone, code);
  var data = {
    phone: phone,
    code: code,
  };
  var config = {
    method: "post",
    url: `https://${process.env.PARSE_ENDPOINT}/parse/classes/Otp`,
    headers: {
      "X-Parse-Master-Key": process.env.MASTER_KEY,
      "X-Parse-Application-Id": process.env.APPLICATION_ID,
      "Content-Type": "application/json",
    },
    data: data,
  };
  const result = await axios(config);
  console.log("Result", result.data);
  var options = {
    from: "noreply@thriwe.com",
    to: mail,
    subject: "Signing for OTP",
    text: `wow thats sample `,
    html: `<p>Hi,${code} is your OTP to verify your mobile number. OTP Code is valid for 10 minutes. THRIWE</p>`,
  };
  await sendMailPromise(options);
  return result.data;
};

export default sendOtp;
