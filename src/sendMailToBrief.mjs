import { sendMailPromise } from "./sendMail.mjs";

export const sendBriefMails = async (briefMails, briefData) => {
  var options = {
    from: "noreply@thriwe.com",
    to: briefMails.join(", "),
    subject: "Brief",
    text: `wow thats sample `,
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MOU is successfully signed - {{BrandName}}</title>
        <style>
          /* Set some general styles */
          body {
            background-color: #f8f8f8;
            font-family: Arial, sans-serif;
            line-height: 1.6;
          }
    
          /* Style the container */
          .container {
            margin: 20px auto;
            max-width: 600px;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
    
          /* Style the headings */
          h1 {
            font-size: 28px;
            font-weight: bold;
            color: #007bff;
            margin-bottom: 20px;
          }
    
          /* Style the paragraphs */
          p {
            margin-bottom: 15px;
          }
    
          /* Style the link */
          a {
            color: #007bff;
            text-decoration: none;
          }
    
          /* Style the link on hover */
          a:hover {
            text-decoration: underline;
          }
    
          /* Style the logo image */
          .logo {
            display: block;
            max-width: 100%;
            max-height: 150px;
            margin: 0 auto 20px;
          }
    
          /* Style the platform link */
          .platform-link {
            font-weight: bold;
            color: #007bff;
          }
    
          /* Style the signature date */
          .signature-date {
            font-weight: bold;
          }
    
          /* Style the thank you message */
          .thank-you {
            font-style: italic;
            color: #555;
          }
    
          /* Style the team name */
          .team-name {
            font-weight: bold;
            color: #007bff;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <img
            src="https://assets.thriwe.com/thriwe_website_main/img/logo.png"
            alt="Thriwe Logo"
            class="logo"
          />
          <p>Dear User,</p>
          <p>A form is successfully submitted for brief.</p>
          <p>
            Platform URL:
            <a target="_blank" href="https://tgpl-crm.thriwe.com/"
              >https://tgpl-crm.thriwe.com</a
            >
          </p>
          ${briefData?.region ? `<p>Region: ${briefData?.region}</p>` : ""}
          ${
            briefData?.programName
              ? `<p>Program Name: ${briefData?.programName}</p>`
              : ""
          }
          ${
            briefData?.offerConstruct
              ? `<p>Offer Construct: ${briefData?.offerConstruct}</p>`
              : ""
          }
          ${
            briefData?.offersTandC
              ? `<p>Offer T&C: ${briefData?.offersTandC}</p>`
              : ""
          }
          ${
            briefData?.criteria ? `<p>Criteria: ${briefData?.criteria}</p>` : ""
          }
          ${
            briefData?.category ? `<p>Category: ${briefData?.category}</p>` : ""
          }
          ${
            briefData?.customerRedemptionProcess
              ? `<p>Customer Redemption Process: ${briefData?.customerRedemptionProcess}</p>`
              : ""
          }
          ${
            briefData?.visibilityElements
              ? `<p>Visibility Elements: ${briefData?.visibilityElements}</p>`
              : ""
          }
          ${
            briefData?.focusArea
              ? `<p>Focus Area: ${briefData?.focusArea}</p>`
              : ""
          }
          ${
            briefData?.merchantRedemptionProcess
              ? `<p>Merchant Redemption Process: ${briefData?.merchantRedemptionProcess}</p>`
              : ""
          }
          ${
            briefData?.preRequisiteOffers
              ? `<p>Pre Requisite Offers: ${briefData?.preRequisiteOffers}</p>`
              : ""
          }
          ${
            briefData?.updateSchedule
              ? `<p>Update Schedule: ${briefData?.updateSchedule}</p>`
              : ""
          }
          ${
            briefData?.collaterals
              ? `<p>Collaterals: ${briefData?.collaterals}</p>`
              : ""
          }
          ${
            briefData?.training ? `<p>Training: ${briefData?.training}</p>` : ""
          }
          ${
            briefData?.submission
              ? `<p>Submission: ${briefData?.submission}</p>`
              : ""
          }
          ${
            briefData?.sourcing ? `<p>Sourcing: ${briefData?.sourcing}</p>` : ""
          }
          ${briefData?.count ? `<p>Count: ${briefData?.count}</p>` : ""}
          ${briefData?.writeUp ? `<p>Write Up: ${briefData?.writeUp}</p>` : ""}
          ${
            briefData?.welcomeKit && briefData?.welcomeKit.length > 0
              ? `
            <ul>
              ${briefData?.welcomeKit
                .map(
                  (imageUrl) =>
                    `<li>
                   Welcome Kit :
                    <a target="_blank" href="${
                      imageUrl.data ? imageUrl.data : ""
                    }" >View Welcome Kit</a>
                  </li>`
                )
                .join("")}
            </ul>
          `
              : ""
          }
          <p>Thanks,</p>
          <p>Team Thriwe</p>
        </div>
      </body>
    </html>
    `,
  };
  await sendMailPromise(options);
};
