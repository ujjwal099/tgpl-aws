const pdfTemplate = (
  dummyData,
  templateType = 1,
  textSignature = "",
  ipAddress = "",
  signedAgreement = false
) => {
  // console.log(dummyData);
  const today = new Date();
  let tableRows;
  if (signedAgreement) {
    tableRows = dummyData?.offers
      ?.map((offer) => {
        console.log("linkStore", offer.stores);
        return offer.stores
          ?.map((store) => {
            console.log("store1", store);
            return `<tr>
              <td style="border: 1px solid; padding: 10px;">${offer.offer_text}</td>
              <td style="border: 1px solid; padding: 10px;">${offer.offer_validity_startDate}</td>
              <td style="border: 1px solid; padding: 10px;">${offer.offer_validity_endDate}</td>
              <td style="border: 1px solid; padding: 10px;">${store.store_name}</td>
              <td style="border: 1px solid; padding: 10px;">${store.store_address}</td>
              <td style="border: 1px solid; padding: 10px;">${store.store_city}</td>
              <td style="border: 1px solid; padding: 10px;">${store.store_country}</td>
              <td style="border: 1px solid; padding: 10px;">${store.store_pincode}</td>
              <td style="border: 1px solid; padding: 10px;">${store.contact_no}</td>
            </tr>`;
          })
          .join("");
      })
      .join("");
  } else {
    tableRows = dummyData?.offers
      ?.map((offer) => {
        console.log("linkStore", offer.linkStore);
        return offer.linkStore
          ?.map((store) => {
            console.log("store1", store);
            return `<tr>
              <td style="border: 1px solid; padding: 10px;">${offer.offer_text}</td>
              <td style="border: 1px solid; padding: 10px;">${offer.offer_validity_startDate}</td>
              <td style="border: 1px solid; padding: 10px;">${offer.offer_validity_endDate}</td>
              <td style="border: 1px solid; padding: 10px;">${store.store_name}</td>
              <td style="border: 1px solid; padding: 10px;">${store.store_address}</td>
              <td style="border: 1px solid; padding: 10px;">${store.store_city}</td>
              <td style="border: 1px solid; padding: 10px;">${store.store_country}</td>
              <td style="border: 1px solid; padding: 10px;">${store.store_pincode}</td>
              <td style="border: 1px solid; padding: 10px;">${store.contact_no}</td>
            </tr>`;
          })
          .join("");
      })
      .join("");
  }
  const storeRows = dummyData?.stores
    ?.map((store) => {
      console.log("store2", store);
      return `<tr>
              <td style="border: 1px solid; padding: 10px;">${store.store_name}</td>
              <td style="border: 1px solid; padding: 10px;">${store.store_address}</td>
              <td style="border: 1px solid; padding: 10px;">${store.store_city}</td>
              <td style="border: 1px solid; padding: 10px;">${store.store_country}</td>
              <td style="border: 1px solid; padding: 10px;">${store.store_pincode}</td>
              <td style="border: 1px solid; padding: 10px;">${store.contact_no}</td>
            </tr>`;
    })
    .join("");
  console.log("tableRows", tableRows);
  console.log("storeRows", storeRows);
  const htmlString1 = `
<!DOCTYPE html>
<html lang="en" style="box-sizing: border-box;">
<head style="box-sizing: border-box;">
    <meta charset="UTF-8" style="box-sizing: border-box;">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" style="box-sizing: border-box;">
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" style="box-sizing: border-box;">
    <title style="box-sizing: border-box;">Document</title>
<body style="box-sizing: border-box;margin: 0;font-family: var(--bs-font-sans-serif);font-size: 1rem;font-weight: 400;line-height: 1.5;color: #212529;background-color: #fff;-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: transparent;">
    <section style="box-sizing: border-box;">
        <div class="container py-5" style="box-sizing: border-box;width: 100%;padding-right: var(--bs-gutter-x,.75rem);padding-left: var(--bs-gutter-x,.75rem);margin-right: auto;margin-left: auto;padding-top: 3rem!important;padding-bottom: 3rem!important;">
            <div class="row m-0" style="box-sizing: border-box;--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;display: flex;flex-wrap: wrap;margin-top: calc(var(--bs-gutter-y) * -1);margin-right: calc(var(--bs-gutter-x) * -.5);margin-left: calc(var(--bs-gutter-x) * -.5);margin: 0!important;">
                <div class="logo mb-3" style="box-sizing: border-box;flex-shrink: 0;width: 100%;max-width: 100%;padding-right: calc(var(--bs-gutter-x) * .5);padding-left: calc(var(--bs-gutter-x) * .5);margin-top: var(--bs-gutter-y);margin-bottom: 1rem!important;">
                    <img src="https://tgpl-crm-api.thriwe.com/parse/files/PROD_APPLICATION_ID/369ab8d05e083f43cd717913d28fcc1d_neba.jpg%20" class="img-fluid" alt="" style="box-sizing: border-box;vertical-align: middle;width: 100px;height: 50px;">
                </div>
            </div>
            <div class="row m-0" style="box-sizing: border-box;--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;display: flex;flex-wrap: wrap;margin-top: calc(var(--bs-gutter-y) * -1);margin-right: calc(var(--bs-gutter-x) * -.5);margin-left: calc(var(--bs-gutter-x) * -.5);margin: 0!important;">
                <div class="col-md-12" style="box-sizing: border-box;flex-shrink: 0;width: 100%;max-width: 100%;padding-right: calc(var(--bs-gutter-x) * .5);padding-left: calc(var(--bs-gutter-x) * .5);margin-top: var(--bs-gutter-y);flex: 0 0 auto;">
                    <h6 class="text-center" style="box-sizing: border-box;margin-top: 0;margin-bottom: .5rem;font-weight: 500;line-height: 1.2;font-size: 1rem;text-align: center!important;">MEMORANDUM OF UNDERSTANDING (MOU)</h6>
                    <h6 class="text-center" style="box-sizing: border-box;margin-top: 0;margin-bottom: .5rem;font-weight: 500;line-height: 1.2;font-size: 1rem;text-align: center!important;">BETWEEN</h6>
                    <p class="text-center" style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;text-align: center!important;align-items: center"><span  style="box-sizing: border-box;display: inline-block;position: relative;text-decoration: underline;"></span><strong style="box-sizing: border-box;font-weight: bolder;">(${
                      dummyData?.formData?.merchant_name
                    })</strong></p>
                    <h6 class="text-center" style="box-sizing: border-box;margin-top: 0;margin-bottom: .5rem;font-weight: 500;line-height: 1.2;font-size: 1rem;text-align: center!important;"><strong style="box-sizing: border-box;font-weight: bolder;">AND</strong></h6>
                    <h6 class="text-center" style="box-sizing: border-box;margin-top: 0;margin-bottom: .5rem;font-weight: 500;line-height: 1.2;font-size: 1rem;text-align: center!important;"><strong style="box-sizing: border-box;font-weight: bolder;">Thriwe Consulting Pvt Ltd.</strong></h6>
                    <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">This is to confirm that "<span class="field w-50" style="box-sizing: border-box;display: inline-block;width: 50%!important;position: relative;text-decoration: underline;">${
                      dummyData?.formData?.brand_name
                    }</span>" (the "Merchant") wishes to participate in the <strong style="box-sizing: border-box;font-weight: bolder;">Hyperlocal Campaign (Dining, Retail, Health & Wellness, Food Delivery)</strong> Program, by providing the below benefits to all Debit / Credit Card users. Banks have identified <strong style="box-sizing: border-box;font-weight: bolder;">Thriwe Consulting Pvt Ltd.</strong> as their agency to enter these MOUs with the merchants for this promotion</p>
                    <ul class="numeric" style="box-sizing: border-box;padding-left: 2rem;margin-top: 0;margin-bottom: 10px;list-style-type: decimal;">
                        <li style="box-sizing: border-box;margin-bottom: 10px;">
                            <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;"><strong style="box-sizing: border-box;font-weight: bolder;"><u style="box-sizing: border-box;">Training:</u></strong> Provide adequate training to staff to educate them about the Offers of Different Bank's & their terms & conditions & redemption process.</p>
                           <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;"> Note: Bank's reserves the right to modify any of the above deliverables owing to any sudden strategic or promotion plan changes during the course of the promotion period.</p>
                        </li>
                        <li style="box-sizing: border-box;margin-bottom: 10px;"><strong style="box-sizing: border-box;font-weight: bolder;"><u style="box-sizing: border-box;">Intellectual Property:</u></strong>
                        <ul class="alpha" style="box-sizing: border-box;padding-left: 2rem;margin-top: 0;margin-bottom: 0;list-style-type: lower-alpha;">
                            <li style="box-sizing: border-box;margin-bottom: 10px;">
                                Thriwe Glocal agrees that it shall use the proprietary marks of Merchant on promotional materials, advertisements as confirmed by Merchant in relation to this agreement. However, Thriwe Glocal shall in no way acquire any right whatsoever, through use in commerce or otherwise, in the Intellectual Property Rights of Merchant on account of the limited permitted use as per the terms of this agreement. All such rights pertaining to use and title of all Intellectual Property Rights of Merchant shall exclusively vest with Merchant
                            </li>
                            <li style="box-sizing: border-box;margin-bottom: 10px;">
                                Merchant agrees that Bank's shall use the proprietary marks of the Merchant on promotional materials, advertisements in relation to this agreement. However, Bank's shall in no way acquire any right whatsoever, through use in commerce or otherwise, in the Intellectual Property Rights of the Merchant on account of the limited permitted use as per the terms of this agreement. All such rights pertaining to use and title of all Intellectual Property Rights Merchant shall exclusively vest with the Merchant.
                            </li>
                            <li style="box-sizing: border-box;margin-bottom: 10px;">
                                The Parties acknowledge and accept that the limited use of the Intellectual Property Rights of Merchant with regard to the promotional materials, advertisements etc., relating to the Offer and other matters incidental thereto or related therewith shall not in any way be constituted as an infringement of the Intellectual Property Rights of Merchant under applicable laws.
                            </li>
                        </ul>
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">The Parties hereby represent and warrant that the Offer under this agreement will not violate any proprietary rights of any third party, including, without limitation, confidential relationships, patent, trade secrets, copyright rights and any other proprietary rights.</p>
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;"><span class="field w-50" style="box-sizing: border-box;display: inline-block;width: 50%!important;position: relative;text-decoration: underline;">${
                          dummyData?.formData?.brand_name
                            ? dummyData?.formData?.brand_name
                            : ""
                        }</span> to allow 'Bank's' tagging under all
                            its outlets listed on Rating Sites.</p>
                        </li>
                       
                        <li style="box-sizing: border-box;margin-bottom: 10px;"><strong style="box-sizing: border-box;font-weight: bolder;"><u style="box-sizing: border-box;">Data Protection:</u></strong>
                        <ul class="alpha" style="box-sizing: border-box;padding-left: 2rem;margin-top: 0;margin-bottom: 0;list-style-type: lower-alpha;">
                            <li style="box-sizing: border-box;margin-bottom: 10px;">
                                <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">The Merchant agrees that the customer data being shared with it for the purposes of the reservations or offer redemption will be dealt with utmost care and confidentiality.</p>
                            </li>
                            <li style="box-sizing: border-box;margin-bottom: 10px;">
                                <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">The Merchant warrants that it would maintain the same type of care and confidentiality of the data of the Bank as it would do of its own data.</p>
                            </li>
                        </ul>
                        </li>
                        <li style="box-sizing: border-box;margin-bottom: 10px;"><strong style="box-sizing: border-box;font-weight: bolder;"><u style="box-sizing: border-box;">Compliance with Laws:</u></strong>
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">Parties agree that it shall at all times and at its own expense (a) strictly comply with all applicable Indian laws, rules, regulations and governmental orders, now or hereafter in effect, relating to its performance of this joint offer, (b) pay all fees and other charges required by such laws, rules and regulations and orders and (c) maintain in full force and effect all licenses, permits, authorization, registration and qualifications from all Indian Governmental departments and agencies to the extent necessary to performits obligations hereunder.</p>
                        </li>
                        <li style="box-sizing: border-box;margin-bottom: 10px;"><strong style="box-sizing: border-box;font-weight: bolder;"><u style="box-sizing: border-box;">Non-Disclosure:</u></strong>
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">Either party agrees that all information and details of the Agreement and the Offer which either party may know or learn during the process of transaction, is confidential information of such other party and shall maintain the confidential information in strict confidentiality bystoring it in the same manner as it stores its own confidential information. Either Party shall not disclose the confidential information to any person without the prior written consent of the other party provided that such party may disclose such information (i) as per orders or directions of court of law or statutory authorities, or (ii) to its employees/agents on strictly need-to- know basis who will be bound by all the terms of this Agreement. In addition to exercising such degree of care to protect the confidential information, either party also agrees not to in any way to disclose, copy, reproduce, modify, use, or otherwise transfer the Confidential Information to any other person, group of persons or entity (whether incorporated or not) without obtaining prior express written consent from the other party. Either Party or his authorized persons shall not reverse engineer, disassemble or decompile any prototypes, software or other tangible objects, which embody the Confidential Information. Either Party retains the sole and exclusive ownership as well as all the intellectual property rights in the Confidential Information and no license or any other interest is granted unless expressly agreed to by the other party in writing prior to such disclosure. All derivatives of such confidential information shall qualify as 'confidential information' and this obligation on the other party to maintain confidentiality will continue beyond termination of this Agreement as per the terms and conditions of this Agreement.</p>
                        </li>
                        
                    </ul>
                    <ul style="box-sizing: border-box;padding-left: 2rem;margin-top: 0;margin-bottom: 10px;">
                        <li style="box-sizing: border-box;margin-bottom: 10px;"><strong style="box-sizing: border-box;font-weight: bolder;"><u style="box-sizing: border-box;">Indemnity:</u></strong>
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">Parties hereby expressly agree to indemnify and keep indemnified each other at all times and make good any loss, damage, suffered or incurred by each other due to any willful act by the staff/employee/personnel/representative of the other party, in the performance of their duties and obligations. Parties further agree to indemnify and keep indemnified each other from and against any loss, damage or liability arising as a result of any act of omission or commission or in respect of non-observance of any statutory requirement with respect to the offer.</p>
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">Further, you shall indemnify, defend and hold harmless us from any and all claims, costs, liabilities, judgments, expenses and damages (including reasonable attorney's fees) arising out of reputation risk to us or failure to provide the offer.
                            Benefits provided by Merchant to Bank's Debit / Credit Card identified above.</p>
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;"><strong style="box-sizing: border-box;font-weight: bolder;">Offer:</strong><span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;"> ${dummyData?.offers?.map(
                          (offer) => {
                            return offer?.offer_text;
                          }
                        )}</span> </p>
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;"><strong style="box-sizing: border-box;font-weight: bolder;">Reservation Email ID:</strong><span class="field w-50" style="box-sizing: border-box;display: inline-block;width: 50%!important;position: relative;text-decoration: underline;"> ${dummyData?.stores?.map(
                          (store) => {
                            return store?.reservation_email + " , ";
                          }
                        )}</span> </p>
                        </li>
                    </ul>
                    <h6 style="box-sizing: border-box;margin-top: 0;margin-bottom: .5rem;font-weight: 500;line-height: 1.2;font-size: 1rem;"><strong style="box-sizing: border-box;font-weight: bolder;">Terms & Conditions:</strong></h6>
                    <ul class="numeric" style="box-sizing: border-box;padding-left: 2rem;margin-top: 0;margin-bottom: 10px;list-style-type: decimal;">
                        <li style="box-sizing: border-box;margin-bottom: 10px;">No two offers can be clubbed or combined.</li>
                            <li style="box-sizing: border-box;margin-bottom: 10px;">This is not valid on Buffet. Offer shall be valid only on Ala-carte
                                or as agreed by the Outlet</li>
                            <li style="box-sizing: border-box;margin-bottom: 10px;">An MOU of the Merchant will be signed if required.</li>
                            <li style="box-sizing: border-box;margin-bottom: 10px;">The customer will state the intention to avail the offer before the bill
                                is generated</li>
                            <li style="box-sizing: border-box;margin-bottom: 10px;">The customer must present his/her valid Debit/Credit card at
                                the restaurant/Retail Shop</li>
                            <li style="box-sizing: border-box;margin-bottom: 10px;">The above terms & conditions will not be valid on
                                reservation platforms</li>
                    </ul>
                    <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">I, declare that we are registered under the FSSA 2006 Act and our <br style="box-sizing: border-box;">
                        Registration # is <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;">${dummyData?.stores?.map(
                          (store) => {
                            return store?.registration_no + " , ";
                          }
                        )}</span></p>
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">We are committed to following and adhering to all the compliance requirements and our obligations under the FSSA, 2006 and are fully responsible for the same, including for the food quality and standard. We indemnify Thriwe Glocal for any action, loss, damage, penalty incurred by Thriwe Glocal because of any lapses or breach of the FSSA, 2006by us.</p>
               <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;"><strong style="box-sizing: border-box;font-weight: bolder;">Signature Date & Time::</strong> ${new Date(
                 today
               ).toLocaleDateString()} & ${
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  } </p>
               <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;"><strong style="box-sizing: border-box;font-weight: bolder;">Using IP Address:</strong><span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;">${ipAddress}</p>
               <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;"><strong style="box-sizing: border-box;font-weight: bolder;">Digitally signed by:</strong> <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;">${
                 dummyData?.formData?.authorised_signatory_name
               }</span></p>
               <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;"><strong style="box-sizing: border-box;font-weight: bolder;">Signatory Designation:</strong> <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;">${
                 dummyData?.formData?.designation
               }</span></p>
               <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;"><strong style="box-sizing: border-box;font-weight: bolder;">Mobile Verified by OTP:</strong> <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;">${
                 dummyData?.formData?.authorised_signatory_number
                   ? dummyData?.formData?.authorised_signatory_number
                   : ""
               }</span></p>
                <img src="${textSignature}" alt="">
               <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;"><strong style="box-sizing: border-box;font-weight: bolder;">Signature:</strong> <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;">
               </span></p>
             
               <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;"><strong style="box-sizing: border-box;font-weight: bolder;">For Thriwe Consulting Pvt Ltd.</strong> <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;"></span></p> <br style="box-sizing: border-box;">
            </div>
            <div class="col-md-12" style="box-sizing: border-box;flex-shrink: 0;width: 100%;max-width: 100%;padding-right: calc(var(--bs-gutter-x) * .5);padding-left: calc(var(--bs-gutter-x) * .5);margin-top: var(--bs-gutter-y);flex: 0 0 auto;">
                <h5 style="box-sizing: border-box;margin-top: 0;margin-bottom: .5rem;font-weight: 500;line-height: 1.2;font-size: 1.25rem;"><strong style="box-sizing: border-box;font-weight: bolder;">Offer Details:</strong></h5>
            </div>
            <div class="col-md-6" style="box-sizing: border-box;width: 50%;max-width: 100%">
                <ul class="numeric" style="box-sizing: border-box;padding-left: 2rem;margin-top: 0;margin-bottom: 10px;list-style-type: decimal;">
                    <li style="box-sizing: border-box;">Brand Name: ${
                      dummyData?.formData?.brand_name
                    }</li> 
                    <li style="box-sizing: border-box;">Brand Legal name: ${
                      dummyData?.formData?.merchant_name
                    }</li>
                    <li style="box-sizing: border-box;">Cuisine: <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;">${dummyData?.stores[0]?.cuisines?.map(
                      (cuisine) => {
                        return cuisine + " , ";
                      }
                    )}</span></li>
                    <li style="box-sizing: border-box;">Address: <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;">${
                      dummyData?.formData?.corporate_address
                    }</span></li>
                    <li style="box-sizing: border-box;">Pin Code: <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;"></span>${
                      dummyData?.formData?.registered_address_pincode
                        ? dummyData?.formData?.registered_address_pincode
                        : ""
                    }</li>
                    <li style="box-sizing: border-box;">Contact number: ${
                      dummyData?.formData?.spoc_no
                    }</li>
                    <li style="box-sizing: border-box;">Name of the Signatory: <span class="field w-50" style="box-sizing: border-box;display: inline-block;width: 50%!important;position: relative;text-decoration: underline;">${
                      dummyData?.formData?.authorised_signatory_name
                    }</span></li>
                    <li style="box-sizing: border-box;">Designation: <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;">${
                      dummyData?.formData?.designation
                    }</span></li>
                    <li style="box-sizing: border-box;">Mobile #: <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;"></span>${
                      dummyData?.formData?.authorised_signatory_number
                    }</li>
                    <li style="box-sizing: border-box;">Email Id: <span class="field w-50" style="box-sizing: border-box;display: inline-block;width: 50%!important;position: relative;text-decoration: underline;"></span>${
                      dummyData?.formData?.authorized_signatory_mail
                    }</li>
                    <li style="box-sizing: border-box;">Swipe Machine (Bank name): ${
                      dummyData?.stores[0]?.tidANDMID[0]?.bankMachineName
                    }</li>
                    <li style="box-sizing: border-box;">TID: <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;"> ${
                      dummyData?.stores[0]?.tidANDMID[0]?.tid
                    }</span></li>
                    <li style="box-sizing: border-box;">MID: <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;"> ${
                      dummyData?.stores[0]?.tidANDMID[0]?.mid
                    }</span></li>
                    <li style="box-sizing: border-box;">Z Rating & Meal for Two: <span class="field w-50" style="box-sizing: border-box;display: inline-block;width: 50%!important;position: relative;text-decoration: underline;">${
                      dummyData?.stores[0]?.zomato_rating_no
                        ? dummyData?.stores[0]?.zomato_rating_no
                        : "" + ` & ` + dummyData?.stores[0]?.meal_for_two
                        ? dummyData?.stores[0]?.meal_for_two
                        : ""
                    }</span></li>
                    <li style="box-sizing: border-box;">POS: <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;"></span></li>
                    <li style="box-sizing: border-box;">Validity: <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;text-decoration: underline;">${
                      dummyData?.offers[0]?.offer_validity_endDate
                    }</span></li>
                </ul>
                <table class="table table-bordered" style="page-break-inside: avoid;box-sizing: border-box;caption-side: bottom;border-collapse: collapse;--bs-table-bg: transparent;--bs-table-accent-bg: transparent;--bs-table-striped-color: #212529;--bs-table-striped-bg: rgba(0, 0, 0, 0.05);--bs-table-active-color: #212529;--bs-table-active-bg: rgba(0, 0, 0, 0.1);--bs-table-hover-color: #212529;--bs-table-hover-bg: rgba(0, 0, 0, 0.075);width: 100%;margin-bottom: 1rem;color: #212529;vertical-align: top;border-color: #dee2e6;">
                        <thead style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 0;vertical-align: bottom;">
                            <th style="box-sizing: border-box;text-align: -webkit-match-parent;border-color: inherit;border-style: solid;border-width: 1px 0;">Partner</th>
                            <th style="box-sizing: border-box;text-align: -webkit-match-parent;border-color: inherit;border-style: solid;border-width: 1px 0;border-bottom-color: currentColor;">Visa Inc. / Contactless</th>
                        </thead>
                    <tr style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 0;">
                        <td style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 1px 0;">Offer</td>
                        <td style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 1px 0;border-bottom-color: currentColor;"></td>
                    </tr>
                    <tr style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 0;">
                        <td style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 1px 0;">Offer Period</td>
                        <td style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 1px 0;border-bottom-color: currentColor;"></td>
                    </tr>
                    <tr style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 0;">
                        <td style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 1px 0;">Name:</td>
                        <td style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 1px 0;border-bottom-color: currentColor;"></td>
                    </tr>
                    <tr style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 0;">
                        <td style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 1px 0;">Designation:</td>
                        <td style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 1px 0;border-bottom-color: currentColor;"></td>
                    </tr>
                    <tr style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 0;">
                        <td style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 1px 0;">Date:</td>
                        <td style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 1px 0;border-bottom-color: currentColor;"></td>
                    </tr>
                    <tr style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 0;">
                        <td style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 1px 0;">Sign and Stamp</td>
                        <td style="box-sizing: border-box;border-color: inherit;border-style: solid;border-width: 1px 0;"></td>
                    </tr>
                </table>
            </div>
            <div class="col-md-6" style="box-sizing: border-box;flex-shrink: 0;width: 50%;max-width: 100%;padding-right: calc(var(--bs-gutter-x) * .5);padding-left: calc(var(--bs-gutter-x) * .5);margin-top: var(--bs-gutter-y);flex: 0 0 auto;">
                <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;"><u style="box-sizing: border-box;">Note: "By signing this agreement/ MOU,you hereby allow the Bank or Thriwe Glocal to contact you through Email/ SMS/Call for the promotions with regards to the programs/ campaigns your brand is onboarded/ participating on."</u></p>
                <h6 style="box-sizing: border-box;margin-top: 0;margin-bottom: .5rem;font-weight: 500;line-height: 1.2;font-size: 1rem;"><strong style="box-sizing: border-box;font-weight: bolder;">Program Name:</strong></h6>
                <ul class="numeric" style="box-sizing: border-box;padding-left: 2rem;margin-top: 0;margin-bottom: 10px;list-style-type: decimal;">
                    ${dummyData.offers[0].program
                      .map(
                        (prog) => `
                <li style="box-sizing: border-box;">
                    ${prog}:
                <span class="field w-75" style="box-sizing: border-box;display: inline-block;width: 75%!important;position: relative;">
                    Yes
                </span>
                </li>
                `
                      )
                      .join("")}
                </ul>
            </div>
            <div class="col-md-12" style="box-sizing: border-box;flex-shrink: 0;width: 100%;max-width: 100%;padding-right: calc(var(--bs-gutter-x) * .5);padding-left: calc(var(--bs-gutter-x) * .5);margin-top: var(--bs-gutter-y);flex: 0 0 auto;">
                <ul class="mb-5" style="box-sizing: border-box;padding-left: 2rem;margin-top: 0;margin-bottom: 3rem!important;">
                    <li style="box-sizing: border-box;margin-bottom: 10px;">
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">Do you have Home Delivery option? </p>
                <form style="box-sizing: border-box;margin-bottom: 20px;">
                    <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                      <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;" ${
                        dummyData?.stores[0]?.delivery_option?.toLowerCase() ==
                        "yes"
                          ? "checked"
                          : ""
                      }>&nbsp; Yes
                    </label>
                    <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                      <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;">&nbsp; No
                    </label>
                  </form>
                    </li>
                    <li style="box-sizing: border-box;margin-bottom: 10px;">
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">How does customer make the payment on delivery?</p>
                  <form style="box-sizing: border-box;margin-bottom: 20px;">
                    <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                      <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;" ${
                        dummyData?.stores[0]?.mode_of_payment?.includes(
                          "EDC/ POS machine with order delivery for customer to do card payment"
                        )
                          ? "checked"
                          : ""
                      } >&nbsp; EDC/ POS machine with order delivery for customer to do card payment
                    </label>
                    <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                        <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;" ${
                          dummyData?.stores[0]?.mode_of_payment?.includes(
                            "Online Payment Link"
                          )
                            ? "checked"
                            : ""
                        }>&nbsp; Online Payment Link
                      </label>
                      <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                        <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;" ${
                          dummyData?.stores[0]?.mode_of_payment?.includes(
                            "Cash Payment"
                          )
                            ? "checked"
                            : ""
                        }>&nbsp; Cash Payment
                      </label>
                      <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                        <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;" ${
                          dummyData?.stores[0]?.mode_of_payment?.includes(
                            "QR Code – UPI/ Wallet"
                          )
                            ? "checked"
                            : ""
                        }>&nbsp; QR Code – UPI/ Wallet
                      </label>
                  </form>
                    </li>
                    <li style="box-sizing: border-box;margin-bottom: 10px;">
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">How customers are placing order with you?</p>
                  <form style="box-sizing: border-box;margin-bottom: 20px;">
                    <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                        <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;">&nbsp; Website (own)
                      </label>
                      <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                        <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;">&nbsp; WhatsApp
                      </label>
                      <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                        <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;">&nbsp; Phone Call
                      </label>
                  </form>
                    </li>
                    <li style="box-sizing: border-box;margin-bottom: 10px;">
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">Do Want to Extend?</p>
                        <form style="box-sizing: border-box;margin-bottom: 20px;">
                          <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                              <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;">&nbsp; Yes
                            </label>
                            <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                              <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;">&nbsp; No
                            </label>
                        </form>
                    </li>
                    <li style="box-sizing: border-box;margin-bottom: 10px;">
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">How you are doing delivery?</p>
                  <form style="box-sizing: border-box;margin-bottom: 20px;">
                    <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                        <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;">&nbsp; Self
                      </label>
                      <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                        <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;">&nbsp; Pidge or third party
                      </label>
                      <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                        <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;">&nbsp; Food Aggregator (Zomato/ Swiggy & Dunzo)
                      </label>
                  </form>
                    </li>
                    <li style="box-sizing: border-box;margin-bottom: 10px;">
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">What is your current swipe machine: - <span class="field w-50" style="box-sizing: border-box;display: inline-block;width: 50%!important;position: relative;text-decoration: underline;"></span></p>
                    </li>
                    <li style="box-sizing: border-box;margin-bottom: 10px;">
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">What is your current MDR: - <span class="field w-50" style="box-sizing: border-box;display: inline-block;width: 50%!important;position: relative;text-decoration: underline;"></span></p>
                    </li>
                    <li style="box-sizing: border-box;margin-bottom: 10px;">
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">Would you like to change it: -
                            <form style="box-sizing: border-box;margin-bottom: 20px;">
                                <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                                    <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;">&nbsp; Yes
                                  </label>
                                  <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
                                    <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;">&nbsp; No
                                  </label>
                              </form>
                        </p>
                    </li>
                    <li style="box-sizing: border-box;margin-bottom: 10px;">
                        <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">Remarks <span class="field w-50" style="box-sizing: border-box;display: inline-block;width: 50%!important;position: relative;text-decoration: underline;"></span></p>
                    </li>
                </ul>         
            </div>
            <div class="col-md-12" style="box-sizing: border-box;flex-shrink: 0;width: 100%;max-width: 100%;padding-right: calc(var(--bs-gutter-x) * .5);padding-left: calc(var(--bs-gutter-x) * .5);margin-top: var(--bs-gutter-y);flex: 0 0 auto;">
                <h3 class="text-center" style="box-sizing: border-box;margin-top: 0;margin-bottom: .5rem;font-weight: 500;line-height: 1.2;font-size: calc(1.3rem + .6vw);text-align: center!important;"><strong style="box-sizing: border-box;font-weight: bolder;"><u style="box-sizing: border-box;">To whomsoever it May Concern</u></strong></h3>
                <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;"><span class="field w-50" style="box-sizing: border-box;display: inline-block;width: 50%!important;position: relative;text-decoration: underline;">${
                  dummyData?.offers?.filter((offer) => {
                    return offer?.program?.includes("HSBC");
                  }).length > 0
                    ? dummyData?.formData?.merchant_name
                    : ""
                }</span> (Merchant Name) have been made aware of the terms and conditions as contained in the Trademark License Agreement executed between ourselves and The
                    Hongkong and Shanghai Banking Corporation Limited (HSBC) dated <span class="field w-50" style="box-sizing: border-box;display: inline-block;width: 50%!important;position: relative;text-decoration: underline;"></span>.</p>
                    <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">You represent and warrant that you agree to adhere to all such terms and conditions and any usage of the HSBC trademarks namely logo, creatives or any other material shall be in accordance with the aforesaid terms and conditions.</p>
                    <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">You acknowledge that the right of usage has been provided to you for a period of 1 year only. Upon the expiry of such period, you will forthwith and with immediate effect, desist from using any of the HSBC Trademarks in any manner whatsoever whether on print or digital medial or any other.</p>
                    <p style="box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">You will at all times indemnify and keep indemnified and protect HSBC against all claims including third party claims, liabilities, costs, losses or damages suffered by HSBC, arising out of the display of the HSBCTrademarks at your outlet/ domain.</p>

                    <p>
                    ${dummyData?.formData?.merchant_name}</p>
                     <p >
                     (Merchant Name)
                     </p>
                    <img src="${textSignature}" alt="">
                      <p>
                       (Authorized Signatory)
                      </p>
            </div>
        </div>
    </div>
    <div>
    <table style="page-break-inside: avoid;border: 1px solid; padding: 10px;">
        <tr>
             <th style="border: 1px solid; padding: 10px;">Offer Text</th>
             <th style="border: 1px solid; padding: 10px;">Offer Validity Start Date</th>
             <th style="border: 1px solid; padding: 10px;">Offer Validity End Date</th>
             <th style="border: 1px solid; padding: 10px;">Store Name</th>
             <th style="border: 1px solid; padding: 10px;">Store Address</th>
             <th style="border: 1px solid; padding: 10px;">Store City</th>
             <th style="border: 1px solid; padding: 10px;">Store Country</th>
             <th style="border: 1px solid; padding: 10px;">Store Pincode</th>
             <th style="border: 1px solid; padding: 10px;">Contact No</th>
        </tr>
        ${tableRows}
    </table>
    </div>
</section>
</body>
</head></html>
`;
  const htmlString2 = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thriwe</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <style>
        .container {
            width: 100%;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="col-12 mt-5 mb-5 text-center"><img src="image/logo.png" /></div>
        <div class="col-12">
            <p style="text-align:center"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">MEMORANDUM OF UNDERSTANDING</span></span>
                </strong>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">This memorandum of understanding (&ldquo;<strong>Mou</strong>&rdquo;) dated ${`${today.getDate()}. ${
              today.getMonth() + 1
            }. ${today.getFullYear()}.`}, 2023 (&ldquo;<strong>Effective Date</strong>&rdquo;) and executed at New Delhi summarizes the principal terms with respect to the arrangement between:</span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">THRIWE CONSULTING PRIVATE LIMITED</span></span>
                </strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">, a private limited company incorporated under the Companies Act, 1956 (CIN: [<strong>U74110DL2008PTC182279]</strong>) and having its registered office at [ <strong>501, Rectangle One, Saket District Centre, New Delhi 110017</strong> ] (hereinafter referred to as &ldquo;<strong>Thriwe</strong>&rdquo;, which expression shall unless repugnant to the meaning and context hereof, be deemed to mean and include its successors and permitted assigns) of the <strong>FIRST PART</strong>;</span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">AND </span></span>
                </strong>
                </span>
                </span>
            </p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">[<strong><em>${
              dummyData?.formData?.merchant_name
            } </em></strong>), a private limited company incorporated under the [Companies Act, 1956/2013] (CIN: [&nbsp; ]) having its registered office at [<strong><em>${
    dummyData?.formData?.registered_address
      ? dummyData?.formData?.registered_address
      : ""
  }</em></strong></span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">] (hereinafter referred to as &ldquo;<strong>Merchant</strong>&rdquo;, which expression shall unless repugnant to the meaning and context hereof, be deemed to mean and include its successors and permitted assigns) of the <strong>OTHER PART</strong>. </span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Thriwe and the Merchant shall collectively be referred to as &ldquo;Parties&rdquo; and individually as &ldquo;Party&rdquo;, wherever the context so permits.</span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Thriwe partnered clients like Banks, Fintech, Insurance, Corporates and other companies shall collectively be referred to as &ldquo;<strong>Thriwe clients</strong>&rdquo;. </span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Now, therefore, in consideration of mutual promises contained herein, the sufficiency of which is hereby acknowledged, the Parties agree as follows:</span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="margin-right:54px; text-align:justify"><span style="font-size:9pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">WHEREAS</span></span>
                </strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">:</span></span>
                </span>
                </span>
            </p>

            <ol>
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The Merchant owns and runs a [dining outlet/salon/etc.] by the name of [${
                  dummyData?.formData?.brand_name
                }<strong><em>__ </em></strong>] (&ldquo;<strong>Outlet</strong>&rdquo;). </span></span>
                    </span>
                    </span>
                </li>
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Thriwe is authorized on behalf of the Thriwe Clients (<em>defined hereinafter</em>) to enter into this MoU.</span></span>
                    </span>
                    </span>
                </li>
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The Merchant is desirous to participate in the Thriwe Voucher Program and agreed to offer commission to Thriwe on voucher value</span></span>
                    </span>
                    </span>
                </li>
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The Merchant is also desirous to offer discount to Customers over and above commission offered to Thriwe (<em>defined hereinafter</em>) the on services provided in its Outlets.</span></span>
                    </span>
                    </span>
                </li>
. This MoU records the oral/ written understanding arrived at between the aforementioned Parties and a detailed agreement would be drawn up in respect of the same.</span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol>
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">DEFINITIONS -</span></span>
                    </strong>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="margin-left:28px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">In this MoU unless there is anything repugnant to the subject or context thereof, the expressions/words listed below shall have the meanings assigned to them, respectively hereafter:</span></span>
                </span>
                </span>
            </p>

            <p style="margin-left:28px; text-align:justify">&nbsp;</p>

            <ol>
                <li style="list-style-type:none">
                    <ol>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">&quot;<strong>Applicable Law</strong>&quot; and any reference to any legislative provisions means any applicable law, statute, by-law, regulation, order, regulatory policy (including any requirement or notice of any regulatory body), compulsory guidance or industry code of practice, rule of court or directives, delegated or subordinate legislation in force from time to time;</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">&ldquo;<strong>Bank</strong>&rdquo; shall mean a company incorporated under the [Companies Act, 1956/ 2013] and licensed as a bank under the Banking Regulation Act, 1949 which has authorized the agent to participate in the Offer (<em>as defined below</em>) on its behalf and having such details as set out in schedule 2 of this MoU;</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">&ldquo;<strong>Bank Card</strong>&rdquo; shall mean credit or debit card which has been issued by the Bank and is valid and subsisting during the entire duration of the Offer; </span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">&quot;<strong>Confidential Information</strong>&quot; </span></span>
                            <span style="font-family:Arial,sans-serif"><span style="color:black"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">shall mean</span></span>
                            </strong>
                            </span>
                            </span><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif"> any information of a confidential nature whether in tangible or intangible form or whether specifically marked as confidential or not, concerning the business, affairs, customers, clients or suppliers of the other Party or of any member of its affiliates, including but not limited to information relating to a Party&rsquo;s operations, processes, plans, product information, know-how, designs, trade secrets, software, applications, source code, market opportunities and customers, financial information, internal processes, information about Party&rsquo;s employees. In addition to the foregoing, Confidential Information of either Party (the Party disclosing such information being the &ldquo;<strong>Disclosing Party</strong>&rdquo; and the other Party being the &ldquo;<strong>Receiving Party</strong>&rdquo;) may also include information which the Disclosing Party protects against un-restricted disclosure to others that: (i) the Disclosing Party or its representatives designates as confidential at the time of disclosure; or (ii) should reasonably be understood to be confidential given the nature of the information and the circumstances surrounding its disclosure; including, without limitation, information about or concerning any Third Party that is disclosed to the Receiving Party under this MoU;</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">&ldquo;<strong>Customer</strong>&rdquo; for the purpose of this MoU means a person who holds a valid Bank card;</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">&ldquo;<strong>Intellectual Property</strong>&rdquo; includes ideas, concepts, creations, discoveries, domain names, inventions, improvements, know how, trade or business secrets; trademarks, service marks, designs, utility models, tools, vices, models, methods, patents copyright (including all copyright in any designs and any moral rights), procedures, processes, systems, principles, algorithms, works of authorship, flowcharts, drawings, books, papers, models, sketches, formulas, teaching techniques, electronic codes, proprietary techniques, research projects, and other confidential and proprietary information, computer programming code, source code, object code, databases, software programs, data, documents, instruction manuals, records, memoranda, notes, user guides; in either printed or machine-readable form, whether or not copyrightable or patentable, or any written or verbal instructions or comments;</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">&ldquo;</span></span><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Intellectual Property Rights</span></span></strong>
                            <span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">&rdquo;</span></span><strong> </strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">shall mean all rights in any Intellectual Property, in each case whether registered or unregistered and including all applications for registrations, and rights to apply and make such applications, and any extensions or renewals thereof, including all rights provided by international treaties and conventions, rights of distribution, reproduction and all other exploitation rights, and any goodwill in relation to or in connection with the same, or such other similar or equivalent rights or forms of protection which subsist or will subsist in the future in any part of the world</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">&ldquo;<strong>Personal Data</strong>&rdquo; shall mean any information that relates to a natural person which, either directly or indirectly, in combination with other information available or likely to be available with a body corporate, is capable of identifying such person and shall include sensitive personal data as defined under Information Technology Act, 2000 and rules made thereunder and as amended from time to time.</span></span>
                            </span>
                            </span>
                        </li>
                    </ol>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="2">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">OFFER - </span></span>
                    </strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The Merchant, pursuant to the Thriwe Voucher program with the Thriwe Clients, shall extend a commission to Thriwe and Discount offer to customer of on all days in a week to all holders of the Thriwe Voucher issued in India and abroad details whereof have been provided in Schedule 1 hereto (hereinafter referred to as the &ldquo;<strong>Offer</strong>&rdquo;).</span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="margin-left:38px; text-align:justify">&nbsp;</p>

            <ol start="3">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">TERM AND TERMINATION - </span></span>
                    </span>
                    </strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">This MOU shall be valid for the period of 1 year i.e. from [____________] to [___________].<em> </em>Both the Parties may mutually agree in writing to terminate this MOU anytime during the subsistence of this MOU by providing prior written notice of such termination, of at least 30 days. </span></span>
                    </span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="4">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">OBLIGATIONS OF THE MERCHANT -</span></span>
                    </strong>
                    </span>
                    </span>

                    <ol>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The Merchant shall extend the Offer to the Customers in accordance with the details as set out in Schedule 1. The Offer shall be valid for the period mentioned under Schedule I (&ldquo;<strong>Offer Period</strong>&rdquo;).</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The Merchant shall be solely responsible for the delivery, service, suitability, merchantability, availability and quality, of and with regard to the products/ services made available to Customers under the Offer and shall offer the standard service providers warranties in respect of the services provided. The Merchant shall inform the Bank in case it starts any new Outlets and the Offer will get automatically extended to these new Outlets for entire Offer Period. </span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The Merchant shall further be responsible and liable for all/any disputes, queries, complaints and contentions raised by Customers including but not limited to, delivery, service, suitability, merchantability, availability or quality of the food, products and/or services offered by the Merchant. These disputes, queries, complaints or contentions include disputes raised by the Customers directly to the Merchant or disputes forwarded by the Bank to the Merchant which shall be attended to promptly and be satisfactorily resolved by the Merchant within 48 (forty-eight) hours. In the event the Bank is constrained to compensate the Customer on account of a dispute regarding delivery, service, suitability, merchantability, availability or quality of the Merchant&rsquo;s food, products and/or services made available to Customers under this Offer, the Merchant shall be obligated to promptly and without demur compensate the Bank on account of the same.<strong><em> </em></strong></span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The Merchant shall be responsible for communicating the Offer to the Customers at the Outlet using promotional material provided by the Thriwe Clients to the Merchant more particularly listed in <strong>Schedule 2 </strong>(&ldquo;<strong>Marketing Material</strong>&rdquo;).</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The Merchant shall allow the third party appointed by the Thriwe Clients to survey the Marketing Material on a working day and within business hours.</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The Merchant shall provide the details of redemption data required by Thriwe on a monthly basis. The redemption data shall be provided by the Merchant within first 5 (five) days of the month or within such timelines as mutually agreed between the Parties.</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Thriwe will create denomination basis the requirement of Thriwe Clients or use standard denomination (e.g.: Rs.100, Rs.250, Rs.500, Rs.750, Rs.1000, Rs.2500, Rs.5000)</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Thriwe will share invoice with merchant once every month against the commission.</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The Merchant shall raise the Bill of Supply <span style="background-color:white"><span style="color:#222222">for the value of voucher (Voucher value minus commission). Merchant shall also have an option to raise a consolidated Bill of Supply for a month. The voucher value shall be determined basis the below formula: </span></span>
                            </span>
                            </span>
                            </span>
                            </span>
                        </li>
                    </ol>
                </li>
            </ol>

            <p style="margin-left:28px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="background-color:white"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:#222222">Voucher value = Voucher value - Commission (Excluding GST. For example - e.g.: 500 - 50 (10% commission) = Rs.450. &nbsp;</span></span>
                </span>
                </span>
                </span>
                </span>
            </p>

            <ol>
                <li style="list-style-type:none">
                    <ol start="10">
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">In addition to that above, the Merchant agrees that GST shall be applicable on commission and the same will be deducted by Thriwe and deposited. </span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Thriwe will transfer funds to merchant account once every week for the redeemed voucher. Thriwe will inform via email of the day in which merchant fund will be transferred. Voucher value shall be determined basis the below formula:</span></span>
                            </span>
                            </span>
                        </li>
                    </ol>
                </li>
            </ol>

            <p style="margin-left:28px; text-align:justify">&nbsp;</p>

            <p style="margin-left:28px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Thriwe will transfer funds either Tuesday or Thursday and same will be informed to merchant via email. Thriwe will transfer last seven days funds against redeemed voucher.</span></span>
                </span>
                </span>
            </p>

            <p style="margin-left:28px; text-align:justify">&nbsp;</p>

            <p style="margin-left:28px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Fund Transfer value = Voucher value &ndash; (Commission + GST)</span></span>
                </span>
                </span>
            </p>

            <p style="margin-left:28px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">e.g.: Rs.500 is Voucher value and commission is 15% payout will be</span></span>
                </span>
                </span>
            </p>

            <p style="margin-left:28px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Rs.500 &ndash; (75 + 13.50) = Rs.411.50 is the payout to merchant</span></span>
                </span>
                </span>
            </p>

            <p style="margin-left:28px; text-align:justify">&nbsp;</p>

            <p style="margin-left:38px; text-align:justify">&nbsp;</p>

            <ol start="5">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><span style="color:black">INTELLECTUAL PROPERTY</span></span>
                    </span>
                    </strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif"> -</span></span>
                    </span>
                    </span>

                    <ol>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Each Party shall retain all right, title and interest in its Intellectual Property Rights.</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">No interest whatsoever in the other Party&#39;s Intellectual Property Rights is granted by this Agreement and use of any Intellectual Property Right permitted to one Party by the other Party subject to the express written consent of such other Party and shall be strictly in terms of this Agreement and any violation of the same shall be construed as breach of this Agreement.</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">To the fullest extent permissible by Applicable Laws, both Parties agree that they will not, nor will they allow others to, reverse engineer or disassemble any parts of the other party&#39;s Intellectual Property. Neither Party shall use the Intellectual Property of the other Party in any manner whatsoever without the prior written consent of the other Party.</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Both the Parties herein are complete owners of their respective brands, trademarks, logos.</span></span>
                            </span>
                            </span>
                        </li>
                    </ol>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="6">
                <li style="text-align:justify"><span style="font-size:9pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">DATA PROTECTION - </span></span><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The Merchant agrees that the customer data being shared with it for the purposes of the reservations or offer redemption will be dealt with utmost care and confidentiality. The Merchant warrants that it would maintain the same type of care and confidentiality of the data of the Bank as it would do of its own data.</span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="7">
                <li style="text-align:justify"><span style="font-size:9pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">DETAILS OF THE PROGRAMS:<u> </u></span></span><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Thriwe shall create a platform and onboard merchants from different categories like dining, salon, among others and will create a system to generate vouchers of different denomination on real time basis. Users can visit the platform and generate vouchers of defined denomination and balance will be deducted as per voucher value. Outlet operator can redeem the voucher and provide discount to user. Thriwe will make payment every week (Tuesday or Thursday) of the voucher redeemed in the last 7 days.</span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="8">
                <li style="text-align:justify"><span style="font-size:9pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">NON-DISCLOSURE:</span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <h1 style="margin-left:28px; text-align:justify"><span style="font-size:9pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Subject to Applicable Law, each Party shall ensure to its best efforts that its respective employees, directors, successors and representatives maintain confidentiality regarding the contents of this Agreement, the information pertaining to the Parties, and the Business and affairs of the&nbsp;Parties. The Parties shall be permitted to disclose all aspects of this&nbsp;Agreement&nbsp;to their investment bankers, accountants, legal counsel and in so far as it is disclosed in each case only where such Persons are under appropriate non-disclosure obligations imposed by professional ethics, Law or contracts.&nbsp;The Parties shall be permitted to disclose Confidential Information which (i) is in the public domain, other than by breach of this Agreement; (ii) is required to be disclosed under any Applicable Law; (iii) is later acquired by a Party from a source not obligated to any other Party, or its Affiliates, to keep such information confidential; or (iv) was previously known or already in the lawful possession of a Party, prior to disclosure by any other Party.</span></span>
                </span>
                </span>
            </h1>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="9">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">REPRESENTATION AND WARRANTIES - </span></span>
                    </strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Each Party represents and warrants that: (a) it is a duly organized, validly existing, and in good standing under the laws of India and has the right, power and authority to enter into this MoU; (b) it has all the requisite corporate power, government licenses and authority to execute, deliver and perform its obligations under this MoU; (c) all acts, conditions and things required to be done, fulfilled and performed to ensure that the obligations assumed by it under this MoU are legal, valid, binding and enforceable and will be done, fulfilled and performed in good faith; (d) this MoU is valid and binding obligations, enforceable against it in accordance with its terms; (d) it shall comply with all Applicable Laws in the performance of its obligations and the exercise of its &nbsp;rights under this MoU; and (e) it will perform its obligations under this MoU in compliance with all Applicable Laws, necessary for the performance of its obligations hereunder.</span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="margin-right:12px; text-align:justify">&nbsp;</p>

            <ol start="10">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">INDEMNITY - </span></span>
                    </strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Either Party agrees to indemnify and hold harmless (&ldquo;<strong>Indemnifying Party</strong>&rdquo;) the other Party, its officers, employees, and directors (each, a &ldquo;<strong>Indemnified Party</strong>&rdquo;) against any losses, claims, demands, fines, costs, damages, charges, taxes including interest and penalties, out-of-pocket expenses, including reasonable attorneys&rsquo; and accountants&rsquo; fees , howsoever arising, directly or indirectly, as a result of any breach or non-performance by the Indemnifying Party of any of its obligations, undertakings, covenants, representations or warranties as set out in this Agreement. The Indemnifying Party shall not have any liability for incidental, consequential, indirect, special, or punitive damages of any kind, regardless of the form of action, whether in contract or otherwise, even if any representative of a Party has been advised of the possibility of such damages. Notwithstanding the foregoing, the Indemnifying Party&rsquo;s liability arising or resulting under this Agreement for any damages shall be capped at the consideration of previous 1 (one) month paid by the Customer under this Agreement. </span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="margin-left:63px">&nbsp;</p>

            <ol start="11">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">NOTICES - </span></span>
                    </strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">A notice, permission or other communication under or in connection with this MOU must be in writing, in English, and delivered by e-mail to the relevant Party to the contact, address, and e-mail address set out in this MOU. </span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="margin-left:38px; text-align:justify">&nbsp;</p>

            <ol start="12">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">LAW AND JURISDICTION - </span></span>
                    </strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">This Agreement shall be governed by and interpreted in accordance with the laws of India. The Parties agree that in the event of any disputes or differences arising between the Parties in relation to this Agreement, the Parties shall first attempt to resolve such disputes and differences amicably and through mutual discussions and negotiations. In the event the Parties fail to resolve their disputes or differences amicably, within 30 (thirty) days from the date on which any Party first notifies the other Party of such dispute having arisen, then such disputes shall be settled by arbitration of a sole arbitrator, mutually appointed by the Parties. The arbitration will be conducted in accordance with the arbitration rules and procedures of the Arbitration and Conciliation Act, 1996 as amended from time to time. The language of arbitration proceedings shall be English. The venue and seat of arbitration shall be New Delhi, India</span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="margin-right:12px; text-align:justify">&nbsp;</p>

            <ol start="13">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">FORCE MAJEURE - </span></span>
                    </strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The Parties can terminate the MoU in case of a Force Majeure Event in the manner set out in this MOU or by mutual consent in writing. For the purpose of this MoU, &ldquo;<strong>Force Majeure</strong>&rdquo; shall mean any act of God or State, or any other circumstances beyond the Parties&#39; reasonable control.</span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="margin-left:38px; margin-right:12px; text-align:justify">&nbsp;</p>

            <ol start="14">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">AMENDMENTS - </span></span>
                    </strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">No amendment to this MOU shall be valid or binding unless set forth in writing and duly executed by the Parties to this MOU.</span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="margin-left:63px">&nbsp;</p>

            <ol start="15">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Merchant will have to accept Thriwe voucher till last date of voucher validity. E.g.: If program is valid till 31-Mar and customer generates voucher on 29-Mar with validity of 30 days. Merchant will accept the voucher till 27-Apr. Validity will be mentioned in voucher.</span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <h1 style="text-align:justify">&nbsp;</h1>

            <h1 style="margin-left:38px; text-align:justify"><span style="font-size:9pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Benefits provided by Merchant to Thriwe and Thriwe Clients identified above.</span></span>
                </span>
                </span>
            </h1>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify">&nbsp;</p>

            <table cellspacing="0" class="Table" style="page-break-inside: avoid;border-collapse:collapse; border:none; margin-left:14px; width:100%">
                <tbody>
                    <tr>
                        <td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black; height:48px; width:30%;">
                            <p style="margin-left:49px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Offer(s)</span></span>
                                </span>
                                </span>
                            </p>
                        </td>
                        <td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:1px solid black; height:48px; width:70%">
                            <p style="margin-left:5px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Any denomination between INR<u> 50 to INR 9999</u> voucher to be uploaded in platform for user access</span></span>
                                </strong>
                                </span>
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:45px;">
                            <p style="margin-left:7px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Voucher Validity</span></span>
                                </span>
                                </span>
                            </p>
                        </td>
                        <td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:45px;">
                            <p style="margin-right:6px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Thriwe will define Voucher validity</span></span>
                                </span>
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:45px;">
                            <p style="margin-left:7px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Program Validity (Start &amp; End Date)</span></span>
                                </span>
                                </span>
                            </p>
                        </td>
                        <td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:45px;">
                            <p style="margin-right:6px; text-align:justify">&nbsp;${
                              dummyData?.stores[0]?.start_validity_voucher
                                ? dummyData?.stores[0]?.start_validity_voucher
                                : ""
                            } ${
    dummyData?.stores[0]?.end_validity_voucher ? "&" : ""
  } ${
    dummyData?.stores[0]?.end_validity_voucher
      ? dummyData?.stores[0]?.end_validity_voucher
      : ""
  }</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:45px;">
                            <p style="margin-left:7px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Commission to Thriwe</span></span>
                                </span>
                                </span>
                            </p>
                        </td>
                        <td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:45px;">
                            <p style="margin-right:6px; text-align:justify">&nbsp;${
                              dummyData?.stores[0]?.commission_to_thriwe
                                ? dummyData?.stores[0]?.commission_to_thriwe
                                : ""
                            }</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:45px;">
                            <p style="margin-left:7px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Offer for Customer</span></span>
                                </span>
                                </span>
                            </p>
                        </td>
                        <td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:45px;">
                            <p style="margin-right:6px; text-align:justify">&nbsp;${
                              dummyData?.offers[0]?.offer_text
                            }</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:132px;">
                            <p style="margin-left:7px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Terms &amp; Conditions:</span></span>
                                </span>
                                </span>
                            </p>

                            <p style="text-align:justify">&nbsp;</p>
                        </td>
                        <td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:132px;">
                            <ol>
                                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The above voucher can be utilized against services at the partner merchant.</span></span>
                                    </span>
                                    </span>
                                </li>
                                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The voucher value is equal to a cash value for services availed at the Merchant.</span></span>
                                    </span>
                                    </span>
                                </li>
                                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">The customer will state the intention to avail the offer before the bill is generated.</span></span>
                                    </span>
                                    </span>
                                </li>
                            </ol>

                            <p style="margin-left:55px; margin-right:7px; text-align:justify">&nbsp;</p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify">&nbsp;</p>

            <table cellspacing="0" class="Table" style="page-break-inside: avoid;border-collapse:collapse; border:none; margin-left:8px; width:100%">
                <tbody>
                    <tr>
                        <td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black; height:44px; vertical-align:top; width:50%">
                            <p style="margin-left:7px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">For Merchant:</span></span>
                                </strong>
                                </span>
                                </span>
                            </p>
                        </td>
                        <td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:1px solid black; height:44px; vertical-align:top; width:50%">
                            <p style="margin-left:7px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">For Thriwe Consulting Pvt. Ltd.</span></span>
                                </strong>
                                </span>
                                </span>
                            </p>

                            <p><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span>
                            </p>
                        </td>
                    </tr>
                    <tr>
        <td style="border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:none; height:184px; vertical-align:top; width:314px">
  
      <p style="margin-left:7px;">
        <span style="font-size:11pt">
          <span style="font-family:Verdana,sans-serif">
            <span style="font-size:10.5pt">
              <span style="font-family:&quot;Times New Roman&quot;,serif">
                Name: ${
                  dummyData?.formData?.authorised_signatory_name
                    ? dummyData?.formData?.authorised_signatory_name
                    : ""
                }
              </span>
            </span>
          </span>
        </span>
      </p>
    

    
      <p style="margin-left:7px;">
        <span style="font-size:11pt">
          <span style="font-family:Verdana,sans-serif">
            <span style="font-size:10.5pt">
              <span style="font-family:&quot;Times New Roman&quot;,serif">
                Designation: ${dummyData?.formData?.designation}
              </span>
            </span>
          </span>
        </span>
      </p>
  

 
      <p style="margin-left:7px;">
        <span style="font-size:11pt">
          <span style="font-family:Verdana,sans-serif">
            <span style="font-size:10.5pt">
              <span style="font-family:&quot;Times New Roman&quot;,serif">
                Date: ${new Date(
                  today
                ).toLocaleDateString()} & ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}
              </span>
            </span>
          </span>
        </span>
      </p>
  

 
      <p style="margin-left:7px;">
        <span style="font-size:11pt">
          <span style="font-family:Verdana,sans-serif">
            <span style="font-size:10.5pt">
              <span style="font-family:&quot;Times New Roman&quot;,serif">
                Mobile Verified by OTP: ${
                  dummyData?.formData?.authorised_signatory_number
                    ? dummyData?.formData?.authorised_signatory_number
                    : ""
                }
              </span>
            </span>
          </span>
        </span>
      </p>

       <p style="margin-left:7px;">
        <span style="font-size:11pt">
          <span style="font-family:Verdana,sans-serif">
            <span style="font-size:10.5pt">
              <span style="font-family:&quot;Times New Roman&quot;,serif">
                IpAddress: ${ipAddress}
              </span>
            </span>
          </span>
        </span>
      </p>
   

    <p style="text-align:justify">&nbsp;</p>

    <p style="text-align:justify">&nbsp;</p>
    <img src="${textSignature}" alt="">
    <p style="margin-left:7px; text-align:justify">
      <span style="font-size:11pt">
        <span style="font-family:Verdana,sans-serif">
          <span style="font-size:10.5pt">
            <span style="font-family:&quot;Times New Roman&quot;,serif">
              Stamp &amp; Signature:
            </span>
          </span>
        </span>
      </span>
    </p>
    
                        </td>
                        <td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:184px; vertical-align:top; width:314px">
                            <p style="margin-left:7px; margin-right:228px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Name: Designation: Date:</span></span>
                                </span>
                                </span>
                            </p>

                            <p style="text-align:justify">&nbsp;</p>

                            <p style="text-align:justify">&nbsp;</p>

                            <p style="margin-left:7px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Stamp &amp; Signature:</span></span>
                                </span>
                                </span>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <p>&nbsp;</p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="margin-left:15px; text-align:center"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><u><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Offer Details</span></span>
                </u>
                </strong>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <ol>
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Merchant Name:&nbsp; <u>${
                  dummyData?.formData?.merchant_name
                    ? dummyData?.formData?.merchant_name
                    : ""
                }</u></span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="2">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Merchant Legal name: <u>${
                  dummyData?.formData?.merchant_name
                    ? dummyData?.formData?.merchant_name
                    : ""
                } </u></span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="3">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Address: <u>${
                  dummyData?.formData?.registered_address
                    ? dummyData?.formData?.registered_address
                    : ""
                }</u></span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="4">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Contact number: <u>${
                  dummyData?.formData?.spoc_no
                    ? dummyData?.formData?.spoc_no
                    : ""
                }</u></span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="5">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Name of the Signatory:<u> ${
                  dummyData?.formData?.authorised_signatory_name
                    ? dummyData?.formData?.authorised_signatory_name
                    : ""
                } </u></span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="6">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Designation: &nbsp;<u> ${
                  dummyData?.formData?.designation
                    ? dummyData?.formData?.designation
                    : ""
                }</u></span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="7">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Mobile Number: &nbsp;<u> ${
                  dummyData?.formData?.authorised_signatory_number
                    ? dummyData?.formData?.authorised_signatory_number
                    : ""
                }</u></span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="8">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Email Id: (capital letters): <u>${
                  dummyData?.formData?.authorized_signatory_mail
                    ? dummyData?.formData?.authorized_signatory_mail
                    : ""
                }</u></span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="9">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Swipe Machine (Bank name): (Attach the Copy): <u>${
                  dummyData?.stores[0]?.tidANDMID[0]?.bankMachineName
                    ? dummyData?.stores[0]?.tidANDMID[0]?.bankMachineName
                    : ""
                }</u></span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="10">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">TID: <u>${
                  dummyData?.stores[0]?.tidANDMID[0]?.tid
                    ? dummyData?.stores[0]?.tidANDMID[0]?.tid
                    : ""
                }</u></span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="11">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">MID: <u>${
                  dummyData?.stores[0]?.tidANDMID[0]?.mid
                    ? dummyData?.stores[0]?.tidANDMID[0]?.mid
                    : ""
                }</u></span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <ol start="12">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">POS: <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </u></span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="margin-left:63px">&nbsp;</p>

            <ol start="13">
                <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Z Rating/CFT: ________________________________________________________________________</span></span>
                    </span>
                    </span>
                </li>
            </ol>

            <p style="text-align:justify">&nbsp;</p>

            <p style="margin-left:15px; text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">(Authorized Signatory)</span></span>
                </strong>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify">&nbsp;</p>

            <ul>
                <li style="list-style-type:none">
                    <ul style="list-style-type:disc">
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">What is your current swipe machine: - <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </u></span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">What is your current MDR: - <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </u></span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Would you like to change it: -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Yes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; No</span></span>
                            </span>
                            </span>
                        </li>
                        <li style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Remarks<u>${
                          dummyData?.stores[0]?.remarks_store
                            ? dummyData?.stores[0]?.remarks_store
                            : ""
                        }</u></span></span>
                            </span>
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><u><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Bank Details</span></span>
                </u>
                </strong>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Account Holder Name:${
              dummyData?.stores[0]?.merchant_name_written
                ? dummyData?.stores[0]?.merchant_name_written
                : ""
            }</span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Account Number:${
              dummyData?.stores[0]?.bank_account_number
                ? dummyData?.stores[0]?.bank_account_number
                : ""
            }</span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Bank Name:${
              dummyData?.stores[0]?.bank_name
                ? dummyData?.stores[0]?.bank_name
                : ""
            }</span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Branch:________________________________________________________________</span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">IFSC Code:${
              dummyData?.stores[0]?.ifsc_code
                ? dummyData?.stores[0]?.ifsc_code
                : ""
            }</span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Cancel Cheque Number:___________________________________________________</span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><strong><u><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">Registration Details</span></span>
                </u>
                </strong>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">GST Number:${
              dummyData?.stores[0]?.gst_no ? dummyData?.stores[0]?.gst_no : ""
            }</span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>

            <p style="text-align:justify"><span style="font-size:11pt"><span style="font-family:Verdana,sans-serif"><span style="font-size:10.5pt"><span style="font-family:&quot;Times New Roman&quot;,serif">PAN Number:${
              dummyData?.stores[0]?.panNumber
                ? dummyData?.stores[0]?.panNumber
                : ""
            }</span></span>
                </span>
                </span>
            </p>

            <p style="text-align:justify">&nbsp;</p>
        </div>
        <div>
        <table style="page-break-inside: avoid;border: 1px solid; padding: 10px;">
        <tr>
             <th style="border: 1px solid; padding: 10px;">Store Name</th>
             <th style="border: 1px solid; padding: 10px;">Store Address</th>
             <th style="border: 1px solid; padding: 10px;">Store City</th>
             <th style="border: 1px solid; padding: 10px;">Store Country</th>
             <th style="border: 1px solid; padding: 10px;">Store Pincode</th>
             <th style="border: 1px solid; padding: 10px;">Contact No</th>
        </tr>
        ${storeRows}
    </table>
        </div>
    </div>
</body>
</html>`;

  const htmlString3 = `<!DOCTYPE html>
<html lang="en" style="box-sizing: border-box">
  <head style="box-sizing: border-box">
    <meta charset="UTF-8" style="box-sizing: border-box" />
    <meta
      http-equiv="X-UA-Compatible"
      content="IE=edge"
      style="box-sizing: border-box"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
      rel="stylesheet"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
      style="box-sizing: border-box"
    />
    <title style="box-sizing: border-box">Document</title>
    <body>
      <p>&nbsp;</p>
      <p>
        &nbsp;<img
          src="https://assets.thriwe.com/thriwe_website_main/img/logo.png"
          alt=""
          width="131"
          height="39"
        />
      </p>
      <p>&nbsp;</p>
      <p style="text-align:center;"><strong>THIS AGREEMENT is made on the day</strong></p>
      <p>
        <strong>BETWEEN: Thriwe Consulting FZ LLC</strong> with its registered
        address at&nbsp; ________________ (hereinafter referred to as
        &ldquo;First Party/Thriwe&rdquo;);
      </p>
      <p>AND</p>
      <p>
        The Subscribing Vendor as referred to as&rdquo;
        <strong>${dummyData?.formData?.merchant_name}</strong> P.O.BOX ${
    dummyData?.formData?.po_box
  } (Hereinafter
        referred to As &ldquo;Second Party&rdquo;/ <strong>Merchant)</strong>
      </p>
      <p><strong>&nbsp;</strong></p>
      <p><strong>Select the one which is applicable:</strong></p>
       <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
           <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;" ${
             dummyData?.formData?.mou_type != "Voucher" ? "checked" : ""
           }>&nbsp;
      <strong> OFFERS for Thriwe clients</strong>
      </label>
      <p><strong>WHEREAS</strong>:</p>
      <ol>
        <li>
          The Merchant owns and runs an outlet by the name of
          [${dummyData?.formData?.brand_name}<strong><em>__ </em></strong>]
          (&ldquo;<strong>Outlet</strong>&rdquo;).
        </li>
        <li>
          Thriwe is authorized on behalf of the Thriwe Clients_to enter into
          this MoU.
        </li>
        <li>
          The Merchant is desirous to offer discount to Customers over and above
          commission offered to Thriwe (<em>defined hereinafter</em>) on the
          services provided in its Outlets.
        </li>
      </ol>
      <p><strong>&nbsp;</strong></p>
      <p>
        <strong
          >Participating Programs:
          <u>${
            dummyData?.offers[0]?.program
              ? dummyData?.offers[0]?.program.join(", ")
              : ""
          }</u></strong
        >
        of&nbsp; Dubai, United Arab Emirates
      </p>
      <p>
        <strong>Purpose &amp; Background: </strong>The purpose of this agreement
        is to delineate the general areas of responsibility and to provide
        guidelines for co-ordination of activities between the two organizations
        for the &lsquo;Special Offer&rdquo; made by
        <strong>${
          dummyData.formData?.brand_name
        }</strong><strong> &ldquo;</strong
        ><strong>To</strong> Participating Thriwe Clients.
      </p>
      <p>
        <strong><u>&nbsp;</u></strong>
      </p>
      <p>
        <strong
          >Offer:
          ${
            dummyData?.offers[0]?.offer_text
              ? dummyData?.offers[0]?.offer_text
              : ""
          }</strong
        >
      </p>
      <p><strong>&nbsp;</strong></p>
      <p>
        <strong>Validity: </strong>This agreement shall be in effect from
        ${
          dummyData?.offers[0]?.offer_validity_startDate
            ? dummyData?.offers[0]?.offer_validity_startDate
            : ""
        }<strong> till </strong>&nbsp;${
    dummyData?.offers[0]?.offer_validity_endDate
      ? dummyData?.offers[0]?.offer_validity_endDate
      : ""
  }<strong>. </strong>Both
        parties should give 30 days&rsquo; written confirmation to renew or
        terminate the contract. The termination will be without prejudice to any
        rights or obligations arising prior to the termination date.
      </p>
      <p><strong>&nbsp;</strong></p>
      <p><strong>Terms &amp; Conditions:</strong></p>
      <ul>
        <li>
          Offer not valid in conjunction with any other promotions &amp;
          discounts.
        </li>
      </ul>
      <ul>
        <li>
          Offer to be best offer for Thriwe Clients&rsquo;<strong
            ><u> customers/</u></strong
          >cardholders during the promotion duration.
        </li>
        <li>
          Offer are only valid with payment made using a Thriwe
          Clients&rsquo;<strong><u> customers/</u></strong
          >cardholders credit or Debit Card.
        </li>
      </ul>
      <p>&nbsp;</p>
      <p>
        <strong
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         ${dummyData?.formData?.brand_name}</strong
        >
        <strong>hereby undertakes the following:</strong>
      </p>
      <ul>
        <li>
          Offer to be best offer for Thriwe Clients&rsquo;<strong
            ><u> customers/</u></strong
          >
          Cardholders during the promotion duration.
        </li>
        <li>
          Thriwe Clients&rsquo;<strong><u> customers/</u></strong> Cardholders
          customers entitled for the offer automatically on presenting their
          Thriwe Clients&rsquo;<strong><u> customers/</u></strong> Cardholders
          Debit or credit card.
        </li>
        <li>
          Ensure that the offer is provided in a professional and diligent
          manner.
        </li>
      </ul>
      <p>&nbsp;</p>
      <p>Thriwe Clients&rsquo;<strong><u> customers/</u></strong>&nbsp; Cardholders<strong>hereby undertakes the following:</strong>  </p>
      <ul>
        <li>
          Communicate the offer on Dubai Islamic Bank/ Emirates Islamic Bank Cardholders website
        </li>
        <li>
         Internal broadcast to the staff
        </li>
        <li>
        Communicate the offer through Website, Deals App, Social, Emailers
        </li>
      </ul>
      <p><strong>&nbsp;</strong></p>
      <label class="checkbox-inline" style="box-sizing: border-box;display: inline-block;margin-right: 15px;">
           <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;" ${
             dummyData?.formData?.mou_type != "Offer" ? "checked" : ""
           }>&nbsp;
      
      <strong>Acceptance of Thriwe Vouchers at Merchant outlets</strong>
      </label>
      <p><strong>WHEREAS</strong>:</p>
      <ol>
        <li>
          The Merchant owns and runs an outlet by the name of
          [${dummyData?.formData?.brand_name}<strong><em>__ </em></strong>]
          (&ldquo;<strong>Outlet</strong>&rdquo;).
        </li>
        <li>
          Thriwe is authorized on behalf of the Thriwe Clients (<em
            >defined hereinafter</em
          >) to enter into this MoU.
        </li>
        <li>
          The Merchant is desirous to participate in the Thriwe Voucher Program
          and agreed to offer commission to Thriwe on voucher value
        </li>
      </ol>
      <p>&nbsp;</p>
      <p>
        <strong>Participating Programs: </strong>Thriwe Vouchers in Dubai,
        United Arab Emirates
      </p>
      <p>
        <strong>TERM AND TERMINATION - </strong>This MOU shall be valid for the
        period of 1 year i.e. from date of signing Agreement/MOU. Both the
        Parties may mutually agree in writing to terminate this MOU anytime
        during the subsistence of this MOU by providing prior written notice of
        such termination, of at least 30 days.
      </p>
      <ol>
        <li>
          <strong>OBLIGATIONS OF THE MERCHANT -</strong>
          <ul>
            <li>
              The Merchant shall be solely responsible for the delivery,
              service, suitability, merchantability, availability and quality,
              of and with regard to the products/ services made available to
              Customers under the Offer and shall offer the standard service
              providers warranties in respect of the services provided. The
              Merchant shall inform Thriwe in case it starts any new Outlets and
              the Offer will get automatically extended to these new Outlets for
              entire Offer Period.
            </li>
            <li>
              The Merchant shall further be responsible and liable for all/any
              disputes, queries, complaints and contentions raised by Customers
              including but not limited to, delivery, service, suitability,
              merchantability, availability or quality of the food, products
              and/or services offered by the Merchant. These disputes, queries,
              complaints or contentions include disputes raised by the Customers
              directly to the Merchant or disputes forwarded by the Bank to the
              Merchant which shall be attended to promptly and be satisfactorily
              resolved by the Merchant within 48 (forty-eight) hours. In the
              event the Bank is constrained to compensate the Customer on
              account of a dispute regarding delivery, service, suitability,
              merchantability, availability or quality of the Merchant&rsquo;s
              food, products and/or services made available to Customers under
              this Offer, the Merchant shall be obligated to promptly and
              without demur compensate the Bank on account of the same.
            </li>
            <li>
              Thriwe shall deploy from time to time promotional material at
              merchant outlets in the form of Tent cards, Standees.
            </li>
            <li>
              The Merchant shall allow the third party appointed by the Thriwe
              Clients to survey the Marketing Material on a working day and
              within business hours.
            </li>
            <li>
              The merchant will use platform provided by Thriwe to validate and
              redeem the vouchers. Payout will only be given for the redeemed
              vouchers.
            </li>
            <li>
              Thriwe will create denomination basis the requirement of Thriwe
              Clients or use standard denomination (e.g.: AED 50, AED 100, AED
              250, AED 500, AED 750, AED 1000, AED 2000)
            </li>
            <li>
              Thriwe will share invoice with merchant once every month against
              the commission.
            </li>
            <li>
              The Merchant shall raise the Bill of Supply/Tax Invoice for the
              value of voucher (Voucher value minus commission). Merchant shall
              also have an option to raise a consolidated Bill of Supply for
              each month. The voucher value shall be determined basis the below
              formula:
            </li>
          </ul>
        </li>
      </ol>
      <p>
        Voucher value = Voucher value - Commission (Excluding taxes. For example
        - e.g.:AED 500 - 50 (10% commission) = AED 450.&nbsp;
      </p>
      <p>&nbsp;</p>
      <ul>
        <li>
          In addition to that above, the Merchant agrees that VAT shall be
          applicable on commission and the same will be deducted by Thriwe and
          deposited.
        </li>
      </ul>
      <p>&nbsp;</p>
      <ul>
        <li>
          Thriwe will transfer funds to merchant account once every week for the
          redeemed voucher. Thriwe will inform via email, the details of bank
          account in which fund will be transferred by Thriwe. Voucher value
          shall be determined basis the below formula:
        </li>
      </ul>
      <p>
        Thriwe will transfer funds either Tuesday or Thursday and same will be
        informed to merchant via email. Thriwe will transfer last seven days
        funds against redeemed voucher.
      </p>
      <p>&nbsp;</p>
      <p>Fund Transfer value = Voucher value &ndash; (Commission + VAT)</p>
      <p>e.g.: AED 500 is Voucher value and commission is 15% payout will be</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AED 500 &ndash; (75 + 3.75) =
        AED 421.25 is the payout to merchant
      </p>
      <p>&nbsp;</p>
      <p>
        <strong><u>DETAILS OF THE PROGRAMS</u></strong>
      </p>
      <p>
        Thriwe shall create a platform and onboard merchants from different
        categories like dining, salons, shopping, among others and will create a
        system to generate vouchers of different denomination on real time
        basis. Users can visit the platform and generate vouchers of defined
        denomination and balance will be deducted as per voucher value. Outlet
        operator can redeem the voucher and provide discount to user. Thriwe
        will make payment every week (Tuesday or Thursday) of the voucher
        redeemed in the last 7 days.
      </p>
      <p>&nbsp;</p>
      <p>
        Merchant will have to accept Thriwe voucher till last date of voucher
        validity. E.g.: If program is valid till 31-Mar and customer generates
        voucher on 29-Mar with validity of 30 days. Merchant will accept the
        voucher till 27-Apr. Validity will be mentioned in each voucher.
      </p>
      <p><strong>&nbsp;</strong></p>
  <table style="page-break-inside: avoid;border-collapse: collapse; width: 100%;">
  <tbody>
    <tr>
      <td style="border: 1px solid black; padding: 8px; text-align: left;" width="151">
        <p><strong>Offer(s)</strong></p>
      </td>
      <td style="border: 1px solid black; padding: 8px; text-align: left;" width="463">
        <p>
          <strong>Any denomination between AED<u> 50 to AED 9999</u> voucher to be uploaded in platform for user access</strong>
        </p>
      </td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px; text-align: left;" width="151">
        <p><strong>Voucher Validity</strong></p>
      </td>
      <td style="border: 1px solid black; padding: 8px; text-align: left;" width="463">
        <p>Thriwe will define Voucher validity</p>
      </td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px; text-align: left;" width="151">
        <p><strong>Program Validity (Start &amp; End Date)</strong></p>
      </td>
      <td style="border: 1px solid black; padding: 8px; text-align: left;" width="463">
        <p><strong>&nbsp;${
          dummyData?.stores[0]?.start_validity_voucher
            ? dummyData?.stores[0]?.start_validity_voucher
            : ""
        } ${dummyData?.stores[0]?.end_validity_voucher ? "&" : ""} ${
    dummyData?.stores[0]?.end_validity_voucher
      ? dummyData?.stores[0]?.end_validity_voucher
      : ""
  }</strong></p>
      </td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px; text-align: left;" width="151">
        <p><strong>Commission to Thriwe</strong></p>
      </td>
      <td style="border: 1px solid black; padding: 8px; text-align: left;" width="463">
        <p><strong>&nbsp;${
          dummyData?.stores[0]?.commission_to_thriwe
            ? dummyData?.stores[0]?.commission_to_thriwe
            : ""
        }</strong></p>
      </td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px; text-align: left;" width="151">
        <p><strong>Offer for Customer</strong></p>
      </td>
      <td style="border: 1px solid black; padding: 8px; text-align: left;" width="463">
        <p><strong>&nbsp;${
          dummyData?.offers[0]?.offer_text
            ? dummyData?.offers[0]?.offer_text
            : ""
        }</strong></p>
      </td>
    </tr>
    <tr>
      <td style="border: 1px solid black; padding: 8px; text-align: left;" width="151">
        <p><strong>Terms &amp; Conditions:</strong></p>
        <p>&nbsp;</p>
      </td>
      <td style="border: 1px solid black; padding: 8px; text-align: left;" width="463">
        <p>
          <strong>1.&nbsp;&nbsp; </strong>The above voucher can be utilized against services at the partner merchant.
        </p>
        <p>
          <strong>2.&nbsp;&nbsp; </strong>The voucher value is equal to a cash value for services availed at the Merchant.
        </p>
        <p>
          <strong>3.&nbsp;&nbsp; </strong>The customer will state the intention to avail the offer before the bill is generated.
        </p>
      </td>
    </tr>
    </tbody>
  </table>
      <p><strong>&nbsp;</strong></p>
      <p>
        <strong><u>Bank Details</u></strong>
      </p>
      <p>&nbsp;</p>
      <p>
        Account Holder Name::  ${
          dummyData?.stores[0]?.merchant_name_written
            ? dummyData?.stores[0]?.merchant_name_written
            : ""
        }
      </p>
      <p>&nbsp;</p>
      <p>
        Account Number: ${
          dummyData?.stores[0]?.bank_account_number
            ? dummyData?.stores[0]?.bank_account_number
            : ""
        }
      </p>
      <p>&nbsp;</p>
      <p>
        Bank Name: ${
          dummyData?.stores[0]?.bank_name ? dummyData?.stores[0]?.bank_name : ""
        }
      </p>
      <p>&nbsp;</p>
      <p>
        Branch: ${
          dummyData?.stores[0]?.branch_name
            ? dummyData?.stores[0]?.branch_name
            : ""
        }
      </p>
      <p>&nbsp;</p>
      <p>
        IFSC Code: ${
          dummyData?.stores[0]?.ifsc_code ? dummyData?.stores[0]?.ifsc_code : ""
        }
      </p>
      <p>&nbsp;</p>
      <p>
        Cancel Cheque Number:___________________________________________________
      </p>
      <p>&nbsp;</p>
      <p>
        <strong><u>Registration Details</u></strong>
      </p>
      <p>&nbsp;</p>
      <p>
        VAT Number: ${dummyData?.stores?.vat_number}
      </p>
      <p>&nbsp;</p>
      <p>
        Trade
        License: ${dummyData?.stores?.trade_license_number}
      </p>
      <p>&nbsp;</p>
      <p>
        <strong><u>(To be Filled In Block Letters)</u></strong>
      </p>
      <ol>
        <li>
          Name:
          ${dummyData?.formData?.authorized_signatory_name}
        </li>
        <li>
          Legal
          Name: ${dummyData?.formData?.merchant_name}
        </li>
        <li>
          Brand
          Name: ${dummyData?.formData?.brand_name}
        </li>
        <li>
          Address:
          ${dummyData?.formData?.corporate_address}
        <li>
          Pin Code:
         ${dummyData?.formData?.corporate_address_pincode}
        </li>
        <li>
          Contact number:
          ${dummyData?.formData?.authorised_signatory_number}
        </li>
        <li>
          Name of the Signatory:
         ${dummyData?.formData?.authorised_signatory_name}
        </li>
        <li>
          Designation:
         ${dummyData?.formData?.designation}
        </li>
        <li>
          Mobile Number:
          ${dummyData?.formData?.authorised_signatory_number}
        </li>
        <li>
          Email Id:
          ${dummyData?.formData?.authorized_signatory_mail}
        </li>
        <li>
          Swipe Machine (Bank name):
          ${dummyData?.stores[0].tidANDMID
            ?.map((obj) => obj.bankMachineName)
            .join(", ")}
        </li>
        <li>
          TID #:
         ${dummyData?.stores[0].tidANDMID?.map((obj) => obj.tid).join(", ")}
        </li>
        <li>
          MID #:
          ${dummyData?.stores[0].tidANDMID?.map((obj) => obj.mid).join(", ")}
        </li>
      </ol>
      <p><strong>&nbsp;</strong></p>
      <p>
        <strong
          >IN WITNESS WHEREOF, this agreement has been executed the day and year
          first above written.</strong
        >
      </p>
      <p><strong>&nbsp;</strong></p>
      <p><strong>&nbsp;</strong></p>
      <p><strong>&nbsp;</strong></p>
      <table width="657" style="page-break-inside: avoid;">
        <tbody>
          <tr>
            <td width="328">
              <p>
                Signed by:  <img src="${textSignature}" alt="">
              </p>
              <p>A duly authorised representative of</p>
              <p><strong>Thriwe Consulting FZ LLC</strong></p>
              <p>Name :&nbsp; ${
                dummyData?.formData?.authorised_signatory_name
              }</p>
              <p>Designation : ${dummyData?.formData?.designation}</p>
              <p>&nbsp;</p>
            </td>
            <td width="328">
              <p>
                Signed by:
                &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;
              </p>
              <p>A duly authorised representative of</p>
              <p>
                <strong
                  >&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;..</strong
                >
              </p>
              <p>
                Name:
                &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;
              </p>
              <p>
                Designation:
                &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;
              </p>
              <p>&nbsp;</p>
            </td>
          </tr>
        </tbody>
      </table>
      ${
        dummyData?.formData?.mou_type != "Voucher"
          ? `<div>
    <table style="page-break-inside: avoid;border: 1px solid; padding: 10px;">
        <tr>
             <th style="border: 1px solid; padding: 10px;">Offer Text</th>
             <th style="border: 1px solid; padding: 10px;">Offer Validity Start Date</th>
             <th style="border: 1px solid; padding: 10px;">Offer Validity End Date</th>
             <th style="border: 1px solid; padding: 10px;">Store Name</th>
             <th style="border: 1px solid; padding: 10px;">Store Address</th>
             <th style="border: 1px solid; padding: 10px;">Store City</th>
             <th style="border: 1px solid; padding: 10px;">Store Country</th>
             <th style="border: 1px solid; padding: 10px;">Store Pincode</th>
             <th style="border: 1px solid; padding: 10px;">Contact No</th>
        </tr>
        ${tableRows}
    </table>
    </div>`
          : ` <div>
        <table style="page-break-inside: avoid;border: 1px solid; padding: 10px;">
        <tr>
             <th style="border: 1px solid; padding: 10px;">Store Name</th>
             <th style="border: 1px solid; padding: 10px;">Store Address</th>
             <th style="border: 1px solid; padding: 10px;">Store City</th>
             <th style="border: 1px solid; padding: 10px;">Store Country</th>
             <th style="border: 1px solid; padding: 10px;">Store Pincode</th>
             <th style="border: 1px solid; padding: 10px;">Contact No</th>
        </tr>
        ${storeRows}
    </table>
        </div>`
      }
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </body>
  </head>
</html>
`;
  const htmlString4 = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>file_1689659772551</title>
    <meta name="author" content="Ahmed A. Al-Nahdi" />
    <style type="text/css">
      * {
        margin: 0;
        padding: 0;
        text-indent: 0;
      }
      .s1 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 11.5pt;
      }
      .s2 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 11.5pt;
      }
      .s3 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 10pt;
      }
      .s4 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      .s6 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 11.5pt;
      }
      .s7 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 11.5pt;
      }
      .s8 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 11.5pt;
      }
      .s9 {
        color: black;
        font-family: Symbol, serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 11.5pt;
      }
      .s10 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 10.5pt;
      }
      .s11 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10.5pt;
      }
      .s14 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: italic;
        font-weight: normal;
        text-decoration: none;
        font-size: 12.5pt;
      }
      .s15 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: underline;
        font-size: 10pt;
      }
      .s16 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: underline;
        font-size: 10pt;
      }
      .s17 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      .s18 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: underline;
        font-size: 11.5pt;
      }
      .s19 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 11.5pt;
        vertical-align: 1pt;
      }
      .s20 {
        color: black;
        font-family: Symbol, serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 11.5pt;
      }
      .s21 {
        color: black;
        font-family: "Courier New", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 11.5pt;
      }
      .s22 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 11.5pt;
      }
      .s23 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 11.5pt;
      }
      .s24 {
        color: #212121;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10.5pt;
      }
      .s25 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: underline;
        font-size: 10.5pt;
      }
      .s26 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      .s27 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 9pt;
      }
      .s28 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: underline;
        font-size: 9pt;
      }
      .s29 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      .s30 {
        color: black;
        font-family: Verdana, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      .s31 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
        vertical-align: 3pt;
      }
      .s32 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      .s33 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      .s34 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      .s35 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: underline;
        font-size: 10pt;
      }
      .s36 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 8pt;
      }
      .s37 {
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 8pt;
      }
      .s38 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l1 {
        padding-left: 0pt;
        counter-reset: c1 1;
      }
      #l1 > li > *:first-child:before {
        counter-increment: c1;
        content: counter(c1, decimal) ". ";
        color: black;
        font-family: Calibri, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10.5pt;
      }
      #l1 > li:first-child > *:first-child:before {
        counter-increment: c1 0;
      }
      li {
        display: block;
      }
      #l2 {
        padding-left: 0pt;
      }
      #l2 > li > *:first-child:before {
        content: " ";
        color: black;
        font-family: Symbol, serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      li {
        display: block;
      }
      #l3 {
        padding-left: 0pt;
      }
      #l3 > li > *:first-child:before {
        content: "o ";
        color: black;
        font-family: "Courier New", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      li {
        display: block;
      }
      #l4 {
        padding-left: 0pt;
      }
      #l4 > li > *:first-child:before {
        content: "o ";
        color: black;
        font-family: "Courier New", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      li {
        display: block;
      }
      #l5 {
        padding-left: 0pt;
        counter-reset: g1 1;
      }
      #l5 > li > *:first-child:before {
        counter-increment: g1;
        content: counter(g1, decimal) ". ";
        color: black;
        font-family: Verdana, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 8pt;
      }
      #l5 > li:first-child > *:first-child:before {
        counter-increment: g1 0;
      }
      table,
      tbody {
        vertical-align: top;
        overflow: visible;
      }
    </style>
  </head>
  <body>
    <p style="padding-left: 23pt; text-indent: 0pt; text-align: left">
      <span
        ><table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <img
                width="111"
                height="41"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAApCAYAAAA7xHcRAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAXMUlEQVR4nK1aeZgU1bX/nVvV++wLMyzDIi6AKCICEjCKLAbFBUGIgqgkEhUTUQIalcdiRFxQMW4PjSAqghKNCi6ACErEBVTABRBEdmaYYfbp6e6qe94fXdVdXV3VM+R79/tmuvrec89+zzn3VBOW3nY3BM6EZQwt6Lpi7Yi7VjMziAgAwMwoXD79kepoY9AK6yk9tjh6ydtbrXPmPvt+6zOAjDBO+JyGiUtnaQKwQiKB3w5nnbfO2edbenbiwZTH/uyE+2TkdltX4fMMhVCGmvAAAL/vewCrrRuICAj6/wAPF4DBIAO6vN3nALba8KYRtD9bhbTP2xm1f7cKxQB6rJ57/a6GEw9DUYKQevnkDv1GLuh15c+hUChlv12hTnP2dTd53HC4GcRNH05w5rqVb/saAKiO3LTEMAFgJrgoNZOXtUYRdjinU2uOs96bO3FXpHYJFCW+WVFzFx3e+p1vX+VpT02440gmuexGtdKz8+PGb1WkUWnz1r1/gUIKYjojpscAILhmy8r6ZV8daUleq0xWnuz7nJ5N4zEAApjAcHS9NI+kVDgnRbfGcPZ9Le23e/mPTSf+CkUlIxIwiAmCgs+JPTc+Bcxz2+emPLf1DMr3SIXmQQg/fALweQGA9UsGfMvMR+wKd/vuNtwiETNDAFAAjpuPid02NWnNqIk0mJRTsDkRsHuym2fbR0uGtjLPzIAQnrgjMUCguAwMgLwJGKR7rp1H67x1zS6THc7GvSloRpmsMpwc/lS9CIBCAMU9F5zmCiYiCSImYbomwERG5nOM5XavcorhdniTnlP+cNpHRChVgy9DMgDD8QgEybGLwu1edwvfdh7dCo6TDKFG9EoCuMnpFgHs+J14sA4jbDLHLZIMha1gFCBOW2ypimqpsnJac/NcANgz4r6H85dPy42F/HeAyAvmmuGFp0xYPHb0Lide3Cpdc7R5a/rVlbHouBT6mt54dPRDN5cEcnQnZSQ0QsZf5oOT0YAtwVsNqZrLcYJEsJ95F3wgZqTbzjE0mZ9OxmlN7HdTPAAE/QFuvOHpv1VGGmYD5AFzc2kgRwO3UKW6hVPF1wOSrwGBTIuwIqobteifAOh2fCk6Seomja5VN5lGS8WNdViqTTbDYUsEDakpbkAX4q2pmtwEcgtzdnjz2UMK2gZyIwAiVt7t/LSkxMQ8MSWOUSvzs1HAmQgywp5M9W1ft8qhJlaTnJIEU0Rq6bEqwRmzIRxZlyNSo9tm3OU7enn3U0EoguQafLHl57dnLGqGJnW/z+eoxINN1TmTt74xw870C33GPdA+bhREpEa/nzYlELnynIFQlB6AXvf+BbcuvmfzktB2LToxVVqE7y04c8mgngNx+WcvXKMz+wApIXECAOf4ta0rBvy50q4gAIDkfMs9lmA/RnBxbOOQGgBpsE55i5kRkRoACOPPHBKA9CseV5rMbBiPzLAZDxbrj++9L/DmjDuTqCJL6655/O4kbkqGFAZ+qDrsG/bJc6OPyYZHcb6nDSr3JnPpqfkcWDmjjurD6y6sKJi2fMrdB9rk5KQI3qBFcz48tutemzvKJj366I81RzH4kydvOh6N3oeBWaWoMnDr2jYAi7+sry7YWHfomdS9snxS27OX7qf9cnXFD88CapFVaYUKjQDwod2jjYdActL4b78lOZ0So+SLq8U95wNAVNfw0s+fF//PD6vHHdfCkwDREUIEYGZMqYcJtL9I9S1aP+SOlZ2D+VVZ3kAa/WTYNGkwAySyoSLbZAUxkZ3ObHyDBj7vrPWPPglSiqCo9nsiAURQKI9zg6M3ZIdHlS65ce6hP770YPtQvp4Klz7+sXvDqU/v3bwKRCVQldYlghaHJbq1fguj5TIkjjhDSmBmLNy2pvTOnauegaJeFdeNx2J0A1CoQSYUHpex585a+9gzHl2++lK/a++ccEr/ahOPcVVIbDU+baHAWZr4XYoZCPqnQqjFZgS1bE+akY07mCIUtD9lTqeV9y85Xl9jDbmKkzae3rt5E4QoNSJDkkfnQsFdwWxeZJNStfZOZQy9FfY2jZCgZaUR5mb0enfOVXfu+nAPVO8oEKXqPoHfEMNwBRApMVWZeP2W5b90eHfaIF3KhFOYCMiKx1I3ZWA0fqgS4QJmh4aNYtlonyVSYxKZHvSNv+DDBTdkTNREBCH8hvSpdKx7BBUl5t04JoNfA7GJ3rXKZYenlgcnzZAaihlA53/dM3pHtG4lFBFCUn+U4u6J7SYKMvESBOUdjsiPn/5544DUgiW5Ma4iKXcB+CUxHYvtSGMzmRWSqZo5CvDniOl7IZRiEF0MQSGn2+guWf/IJwe3Lh1c1kcm8TJAZCZTThgscbZkDBJVEFQPRk2a8mCW95YZ6ycliBjkMvRu7U92Ysm9BBICzEaLLr3AuWrTU2dXsHgd8W5WvKxPIGCGlEegy1WQWg1IzYMiRkCIMoMAJbOu8E7d/t6nV5edk9chkNeYelUAMRg0tPjUl9YOnvKIlYH6WLNdpESGB7NUYs2Prbt46oMXlZ5eZ4J9XflrYOj6Z2+vgzYf8W6OSYpBouhf5XuHDS7r81ESL1mwW7K+1I++1O/aMV2CBd+f4vPXd8zr6KRNShjePlKyinNOamX4dNxrzFiv6YnxzufvifeO7PsXFOGxHqe43mS07bfbhn8wbelnvQo7JJx4X32lGLv22QFbYlUfQSjB+KEixO/WUE5/b+6rDWMXjEqWp2x6kfMF0856wp2ZuZNXvbFm7ON3X1hyWp0V/rzCTuHKMQ89WqL4ZidzAcMIqfTsro2/c79Hxr/kkrpmMZ3f6aYu52++qOR0Z8OZLNmMk6JGTnuwbW+5SZx5xFNp8pRwMwB8EZRDIUTX9CuHjHVG44UHH1y30Wo4AOiSXSS/GjXzP33ruS+YtaQcRCBQs6Dht86c4bPeLTiRKM0Jt7BiMZBg/va7EbNfzVL9KQow93qEgsUDxs4DuMqSd4ygrbR1UEDyuitl3eM9Lh1949hrNUd1pThWhpOTch6TArmfNufax6lrZBtk6IYBkhWowPxd6+9KSfrmlmj0w1/G/O8XwhLC7V2fdy7720+I6q8mmWIzLAcaL+05xnpVMJIoM4gOWBlOM2A8VDMIpIRjT+d6Apyp+Phd6Tl6t9AHO3Y2VQ02DocRGtmecxMqAIB2/uxXJ/W4qNERadqgpIAJ5i1PifePzpE1lf/WnUBbh8WcTHwr31cBgPrEc6GRzymez3+bXTbLbFhoUkNY18Sfv1kc3FPb2BGk9t5edXBCvZBnwKeWJGsMYz8Iy/ZvHZGqPDY4YpKZ22OWF7E+UZWpcWwqJcvjb7JQcdNQsvghEDT5WcpiptaakbITxYBuufUkqs30YuVkeoktNOvTJ/MKghCiEGBOGpUBIEbZP1T/fv2iCz+o3nupxvr5TVLvCaIcmNcmhQgkrOGek/UhGBBlZicEaenCXSCz6jAlydixd8BDViU64E5WmSzrUhYdLr02rkzpomjWUyDjvViKFzagNMM5v3pJPaUZDZ0A5aQiBbJMzuMQCQKejZVFv4B2UgJcCDvG+BaTHgNgqQE4Cql/jeCx95Nv0s2wwslLrLsBiZOebpl1VIBDbmAjPDuusXH2WijnYTemQzhMoE7GLaMiTdufSocd0dnfmNj4skSURPIKJ4RK4KN4UcgieRs315KqkJDcKFjuzfL6v0Ik9t6KvhN/ysvJPkbl9eF+PXsxEL/nGXeJZEZ30JN9kLXqdQplmUOREd4cp93L+Ywj6fCWzXZ+bbOWkRqCKaMWModNQuIWrEUaIGUdFCXXciNGIu8zSwBNANfiSM3ugWf2egcxuXnCaeftHt+xX71g1kOWniYAoE3S0VQAnpRFAkCcC6R5fbJicvDL1p8QmKrktDVrWjCjhUModqwSzXrFGg6qAeiIQWELABNYLXV6Qx6VGhr1SEdLvWtCqOmdkMRQDInMJgGDiCaedr5WIrMY4B0ABlku5XEwXTv84OnDz4a3uXZ696t0j3DqEKbqwD4EdO0Y2AiX8ZYlrzu2c0JE1+xKN4xnFnTpIdNOML2ktmxMXhNtnFoQq5ET9ndx9p8pWPbBkCMx2Tm/M1RF3WtSgvGKp6o5fE+TFiF7GKyONKlhTe+bwJHkJWfyHVNK7LwyM8qe/8skAKqlm0Ng5jGnnFtRXFyM0Nofn0kyn0wHEGr7+zevvP62sqEphrPrrVmLIffZqy6+avLEArueBTS5DWTgjOdVgqIMuvO7t0bUx8JIHwQQk9Nb9BQoi3IdclOyKLFrw3q+hSVr2XqRaUZPe3FjwGixTxOGNQ+lRz19yCfP3bK//mgC34H6StHulSlPQqHiJGeGkEKIj4e3WbW9+nDQxMvMGP/p86eGS3PmJcMEYBRFB/OFt4KI8Nr9j60E85FEq8t0WwK4KP/x/LfueWXN0Z/aH2yqIquc31TsFhsr9nTMfWvGG/Vtuq59d2j+jg0HduZbZVOv69Tn6WXl309DPIQaWUfQ8/u+XP38nv+sBTd/OiCvbNNHQ6dvSmqFOJ50M1dirt2ZODBDp2bbUqZKNBXMCX9cNSmTy/pPfHbslmV/BbE3YT0i+rL24DOdVz10DWLRtyFZIOAfh4LiAalOaQm1qrfXOR8v2I1w9B/wRg5DevrDE5gMhbwwX2aTwdThiqV92nTRAeDKzr20HpvE+B99vA5EqiWhMgQIocD4Sza9cB0kHwTkNoBqQCgAqDeI2kGIuE4Ute3FXyz6+u3cq/temTuomogglg664ZCIRT9LMGAmHiKC6hkOT/bfN1cdHWFTEsFo1dgV6qTktMtv0gulQ8XWYoXiUu3FTWfjaVjJGYd9ur7CaM8lz3VcvsEIhp5CVtYTUNQBSfFT2E1GGRLtEfTPh5r7CrzB20HkjdvCUsXq8visU3v93crYjvGPbWyjeG8Ds7Q4h1koEogEFNEJinoFFGUihDISQrRPCkhxfSui66g1b2071FDlAwChCAW7fnffpdD1HfY8Zvfi1gxrvHZvryGNlLGQucwzhkthZLznSz2OecFsPHDOkEmQ2lYjr3OidHfiyVyRUoPU47+4Ti3jbcwgWS9I2XRuR3HRrJHTI3aQX6+c+4LYX3ETWDYn6CU+2cZ2mh3icjEzcWyDX/FGAeN9Xtf80uY9I2cOQEPdmyaQIxIX5E6Vm3vH3rjHUfI+mSpmmiQOONzwJhJ3ypje7QptaY8rBqmaviSFfVu9bCGvT+7U77r7Og3qC6lVxL2QLS6XUrEZdzV5eEbnvr23DFjwk8mb1YEDihfatFeWPtHj8u7QIh/HF8GJH3HF6w2LQCmyMXR54jcRZcTP4+6cWBzMYcAwHhGha1ZR06FrHhvXN0Ld84R3BTStEowwmCNg1gEwdNkITdZD4/r4p6xHTNdauovF1zkK5rCBsxnMzQBixl4JnRsMnA3QjOcw66k4HAbrGqSsgy7roOlxniQ3Qk9p1GNCzyGRE2PmT5pc0ru7Go68DanXgDlmaBgAdOh6g6LzhpuLe3d77KyRb/69/5gjC7h3F5+Ui6HLejDrcY+huHV0vQm69lORjmt2DLnrlIf7XbfbXqjZ78BTe178666+U4c+d+7IDsWKfyZi+l5I2RDnxbQ6dDAi0PXqAGNNB8KQHUOnt9s0/pGPuqJrEp+TR+ssEZM6NTQ0KtfPu14Zd8s07YbOF+oRqaVfRpilX/Vy8qtzqywqdcXhh57SJ1TJAKIOuAmse4UnY2cjqmuQYNsvAgAPhC4sLScrjqgWAwsSo56f6sfZp/ugBQCtXJvb57rw2bmdNJ+S2vKNSg3lzbXK5A0Lgsg+Nb547ID+hwEjwiPbnhvzCcvvuE6iV8rMiOgavtv2nTLn+Do/QkEvEAQqDslAcVZk2cCpUYWEdLsDphnP6SLsVkXam88ZmtmONFojnFsL62SU1BLfraHXEu9Oe01aLTXBW0PXCW9aN9StqWw3Zqbq0oR3y1Nupb79+39rHCseOx9uTubE638jo1MTwc1wbp0Tq37sl/aUS7qToE6eae9yuBG2MuDmiW6KaE3utNN9a8OGs0NlZQNCZWUDsvr1HXa0slJxo2Ed769Zo+4+dEiNaRoVn3HGUCeYTHLa+XXSkxOsFWemPea8U7Mj8dmSEVozMnmVk6c7OUhrQ659+Pr3v4yy/ecp8PRDXe2i638z8H29TZu8my+//ETfnj31P81/KMTEudm+YMUNI0bws6tWlen79h179ccfBwM4b2y3bgvfPbD/yzEXXnTJXSNHHswqyOK5S19v7xFKOKgojTUNDRA+X968m24qv2/ePM+EiRPprK5dY8FAgG+bOTM48/bbw4+8/HJIU9XC6WPHHjitSxf+4MMPaeXmzdkiO1R0QfczD9Xs26dvO3jQIwoLC2664IKjiz/dUCLrG+tefOCBpplz5ijloWCZbGisgJRATQ2oqMjftaioYX843GFw9+4HD+3ahZ+Zz5TV1Ud05kZvYWH33l26bHc13n+TU/6/xsnmgM5jx84e1rt3JQ4devGNvXu+CQb80xubo7PahEJT62KxaWBZV1dTu9wbCDwSlfJRn6rcL0Ff5QQCvhO1tXN8ft/aYMD/bm1dww+qogyN6fomQRgBop2hgL97bjC0+uOHH1nw/tdf95u6cOFlAb+vA4Wbt2pZwXGxmtoX1OzsSTHmd3IDgdxj/35n7uPLlxfNfmXp9wWB4DPV4fAEtbl5tO7zvV9ckPfEkaqqC0pyc7+qrK0dl3O8akxdUcEb2VnZz9c3Ng1lXQt6vb46j6J81hSNTI7GtIc9HmWKIpT8SCw2f9KwYete27hxZ7g5Mmnf8uXvClMB1k/AuQXV2rCZKRe40XOas/Lihq+pqQnVNTVDskKhVdWFeb/tWtZh9fybJ68nQufyhvq7Bp9zzp/HDL6oEkQeKEqTVxGTBnTv/iKxzJ06+uqZfbp18+cI8eZfx/5+FYg9IO6mCjFMMPYHVTVw5cAL7v552esLOpaVoTgU2u7LCt6qCzFQD4VmSZ0rkJV1FYH2qkJc0beoeCkRgYQo8oC+WjZ9+oNg6WkS1K1LaenyOZeOXOgRygXvPTjvUUXxfFdXXDyhKL9g8dK/3buWiOsgRP4vK1b88S9jxx6C5J1ej+eWjqTMzwkEn/Cq6gNCsq8oO2uJ36M+fPDo0XjOy5TX3OK6W5i0FzuZOi1uuamlXJkyhCCpKHn6iRMHYuHot3sPHx41ZeHClbKpcW5hds7GD776csVr69b9dvoVV3xPLAsly6P3jJ+wAoyc2S+/PPu73bvHndK5y2YCgnpMr9Zj2n6NuUoSfQ5Ql2hNzW6T1NXDhzcz845Pn1z4W6HQFw9Nnnx3h9y855nQU0pZteqf//w1ziw6RXW9Zvjs/1mjRaMv0Inqs5rDTSvGjx8vGfxr/ym3LmU91r1/afGLVbW1d155772zENOPK4qSpyqKpkUiX5OgfrquHd9ZW/vNiYb6UQBHX1z/8SXHTlR3ISGyo7GYICllinJOphx3O6mtKe/t5bNTae1Gz+5k+8vLs7I9nobCwkLsP3YsyIBanJ1dd+k902/6fPuOPYFg1pItixb18Ho8DCDQrqio7mh5ucKKEvB7vZqUMhoKBLimvl6lWExjjydHQjYSkzcUCDS2yc9P0Pr12NFQ+6LixsPHj3u7tGsX1aXEgfLybADcpW3bBmaG//zzb/EGAge3v/76Z9mBQF19OOxXhYiUlZRwRXW12tjcnBX0+eoeff214U8uX1HrD4XmTR9zzZyJl122pVNJSQMR4dcjRwIQwsuaVkuqmg2AC3NyGqvq6nLAHOnctm0zmBlSypSy1OmvNTBue+x7W4vLbb8TnBVGSglN0zBh1qyzT7985HXrv/km375+MrKeLPx1t99eun3v3oCdLzvsonf/XdBx+JBrJ8yefa6u6xnxOuH6P7DfswrMPEnQAAAAAElFTkSuQmCC"
              />
            </td>
          </tr></table
      ></span>
    </p>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <table style="border-collapse: collapse; margin-left: 7pt" cellspacing="0">
      <tr style="height: 23pt">
        <td style="width: 224pt">
          <p
            class="s1"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            THIS AGREEMENT is made on the day
          </p>
        </td>
        <td style="width: 239pt">
          <p
            class="s2"
            style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 13pt;
              text-align: right;
            "
          >
            تم إبرام هذه الاتفاقية في هذا اليوم
          </p>
        </td>
      </tr>
      <tr style="height: 80pt">
        <td style="width: 224pt">
          <p
            class="s4"
            style="
              padding-top: 8pt;
              padding-left: 2pt;
              padding-right: 17pt;
              text-indent: 0pt;
              line-height: 114%;
              text-align: left;
            "
          >
            <b>BETWEEN: Thriwe Consulting FZ LLC </b>with its registered address
            at <u>&nbsp;</u> (hereinafter referred to as “First Party/Thriwe”);
            AND
          </p>
        </td>
        <td style="width: 239pt">
          <p
            class="s6"
            style="
              padding-top: 8pt;
              padding-right: 2pt;
              text-indent: 0pt;
              text-align: right;
            "
          >
            بين كل من : ثريوي للاستشارات اف زد المحدودة، وعنوانها المسجل في
            -------، يشار إليها فيما بعد بـ ("الطرف الأول / ثريوي") و
          </p>
        </td>
      </tr>
      <tr style="height: 71pt">
        <td style="width: 224pt">
          <p
            class="s4"
            style="
              padding-top: 8pt;
              padding-left: 2pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            The Subscribing Vendor as referred to as” ${
              dummyData?.formData?.merchant_name
            }
            P.O.BOX ${
              dummyData?.formData?.po_box
            } (Hereinafter referred to As “Second Party”/ Merchant)
          </p>
        </td>
        <td style="width: 239pt">
          <p
            class="s6"
            style="
              padding-top: 8pt;
              padding-left: 17pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            البائعون المشتركون ويشار إليها بـ"---------- ص ب ----" ويشلر إليها
            فيما يلي بـ"الطرف الثاني/ التاجر "
          </p>
        </td>
      </tr>
      <tr style="height: 30pt">
        <td style="width: 224pt">
          <p
            class="s3"
            style="
              padding-top: 7pt;
              padding-left: 2pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Select the one which is applicable:
          </p>
        </td>
        <td style="width: 239pt">
          <p
            class="s2"
            style="
              padding-top: 8pt;
              padding-right: 2pt;
              text-indent: 0pt;
              text-align: right;
            "
          >
            قم باختيار الأنسب:
          </p>
        </td>
      </tr>
      <tr style="height: 40pt">
        <td style="width: 224pt">
          <p
            class="s3"
            style="
              padding-top: 7pt;
              padding-left: 13pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
          <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;" ${
            dummyData?.formData?.mou_type != "Voucher" ? "checked" : ""
          }>&nbsp;
            OFFERS for Thriwe clients
          </p>
        </td>
        <td style="width: 239pt">
          <p
            class="s2"
            style="
              padding-top: 8pt;
              padding-right: 2pt;
              text-indent: 0pt;
              text-align: right;
            "
          >
            عروض لعملاء ثريوي <span class="s9"><input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;" ${
              dummyData?.formData?.mou_type != "Voucher" ? "checked" : ""
            }>&nbsp;</span>
          </p>
        </td>
      </tr>
      <tr style="height: 177pt">
        <td style="width: 224pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s10"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            WHEREAS<span class="s11">:</span>
          </p>
          <ol id="l1">
            <li data-list-text="1.">
              <p
                class="s11"
                style="
                  padding-top: 8pt;
                  padding-left: 20pt;
                  padding-right: 17pt;
                  text-indent: -18pt;
                  line-height: 114%;
                  text-align: justify;
                "
              >
                The Merchant owns and runs an outlet by the name of
                [${dummyData?.formData?.brand_name}] (“Outlet”).
              </p>
            </li>
            <li data-list-text="2.">
              <p
                class="s11"
                style="
                  padding-top: 1pt;
                  padding-left: 20pt;
                  padding-right: 19pt;
                  text-indent: -18pt;
                  line-height: 114%;
                  text-align: justify;
                "
              >
                Thriwe is authorized on behalf of the Thriwe Clients_to enter
                into this MoU.
              </p>
            </li>
            <li data-list-text="3.">
              <p
                class="s11"
                style="
                  padding-left: 20pt;
                  padding-right: 19pt;
                  text-indent: -18pt;
                  line-height: 114%;
                  text-align: justify;
                "
              >
                The Merchant is desirous to offer discount to Customers over and
                above commission offered to Thriwe (defined hereinafter) on the
                services provided in its Outlets.
              </p>
            </li>
          </ol>
        </td>
        <td style="width: 239pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s2"
            style="padding-left: 196pt; text-indent: 0pt; text-align: left"
          >
            الحيثيات :
          </p>

          <div style="display: flex">
            <div style="width: 90%; text-align: end">
              يمتلك التاجر ويدير منافذ باسم (-----------) ("المنافذ")
            </div>
            <div style="width: 10%; text-align: end">-1</div>
          </div>
          <div style="display: flex">
            <div style="width: 90%; text-align: end">
              ثريوي مفوضة نيابة عن عملاء ثريوي للدخول في مذكرة التفاهم هذه.
            </div>
            <div style="width: 10%; text-align: end">-2</div>
          </div>
          <div style="display: flex">
            <div style="width: 90%; text-align: end">
              يرغب التاجر في منح خصم للعملاء علاوة على العمولة الممنوحة إلى
              ثريوي (يرد تعريفها فيما يلي) على الخدمات المتوفرة في منافذها.
            </div>
            <div style="width: 10%; text-align: end">-3</div>
          </div>
        </td>
      </tr>
      <tr style="height: 57pt">
        <td style="width: 224pt">
          <p
            class="s3"
            style="
              padding-top: 8pt;
              padding-left: 15pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Participating Programs: <u>${
              dummyData?.offers[0]?.program
                ? dummyData?.offers[0]?.program.join(", ")
                : ""
            }</u>
          </p>
          <p
            class="s15"
            style="
              padding-top: 1pt;
              padding-left: 15pt;
              padding-right: 17pt;
              text-indent: 1pt;
              line-height: 114%;
              text-align: left;
            "
          >
            ___________________, of Dubai, United Arab Emirates
          </p>
        </td>
        <td style="width: 239pt">
          <p
            class="s2"
            style="
              padding-top: 8pt;
              padding-right: 2pt;
              text-indent: 0pt;
              text-align: right;
            "
          >
            برامج المشاركة:
          </p>
          <p
            class="s6"
            style="
              padding-top: 2pt;
              padding-right: 5pt;
              text-indent: 0pt;
              text-align: right;
            "
          >
            ---------------، دبي ، الإمارات العربية المتحدة
          </p>
        </td>
      </tr>
      <tr style="height: 105pt">
        <td style="width: 224pt">
          <p
            class="s3"
            style="
              padding-top: 7pt;
              padding-left: 2pt;
              padding-right: 19pt;
              text-indent: 0pt;
              line-height: 114%;
              text-align: justify;
            "
          >
            Purpose &amp; Background:
            <span class="s4"
              >The purpose of this agreement is to delineate the general areas
              of responsibility and to provide guidelines for coordination of
              activities between the two organizations for the ‘Special Offer”
              made by</span
            >
          </p>
          <p
            class="s16"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            <span class="s17">${
              dummyData.formData?.brand_name
            } </span><span class="s3">“To </span
            ><span class="s4">Participating Thriwe</span>
          </p>
          <p
            class="s4"
            style="
              padding-top: 1pt;
              padding-left: 2pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: left;
            "
          >
            Clients.
          </p>
        </td>
        <td style="width: 239pt">
          <p
            class="s6"
            style="
              padding-top: 8pt;
              padding-left: 17pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            الهدف والخلفية : تهدف هذه الاتفاقية إلى تحديد مجالات المسئولية
            العامة وتوفير التوجيه لتنسيق الأنشطة بين المؤسستين بخصوص "العرض
            الخاص" المقدم من -----------" إلى عملاء ثريوي المشاركين.
          </p>
        </td>
      </tr>
    </table>
    <p style="text-indent: 0pt; text-align: left" />
    <p style="text-indent: 0pt; text-align: left" />
    <table
      style="border-collapse: collapse; margin-left: 7.308pt"
      cellspacing="0"
    >
      <tr style="height: 14pt">
        <td style="width: 240pt">
          <p
            class="s15"
            style="
              padding-left: 2pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: left;
            "
          >
            Offer: ${
              dummyData?.offers[0]?.offer_text
                ? dummyData?.offers[0]?.offer_text
                : ""
            }
          </p>
        </td>
        <td style="width: 222pt">
          <p
            class="s18"
            style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 13pt;
              text-align: right;
            "
          >
            العرض
          </p>
        </td>
      </tr>
      <tr style="height: 92pt">
        <td style="width: 240pt">
          <p
            class="s3"
            style="
              padding-top: 1pt;
              padding-left: 2pt;
              text-indent: 0pt;
              text-align: justify;
              line-height: 114%;
            "
          >
            Validity: This agreement shall be in effect from ${
              dummyData?.offers[0]?.offer_validity_startDate
                ? dummyData?.offers[0]?.offer_validity_startDate
                : ""
            } till
            ${
              dummyData?.offers[0]?.offer_validity_endDate
                ? dummyData?.offers[0]?.offer_validity_endDate
                : ""
            }. Both parties should give 30 days’ written confirmation
            to renew or terminate the contract. The termination will be without
            prejudice to any rights or obligations arising prior to the
            termination date.
          </p>
        </td>
        <td style="width: 222pt">
          <p
            class="s6"
            style="padding-left: 10pt; text-indent: 0pt; text-align: left"
          >
            السريان: تسري هذه الاتفاقية اعتباراً من --------- حتى --------،
            يتعين على كلا الطرفين تقديم تأكيد خطي خلال 30 يوم لتجديد أو إنهاء
            العقد. يكون الإنهاء دون أي إخلال بأي حقوق أو التزامات تنشأ قبل تاريخ
            الإنهاء .
          </p>
        </td>
      </tr>
      <tr style="height: 157pt">
        <td style="width: 240pt">
          <p
            class="s3"
            style="
              padding-top: 7pt;
              padding-left: 2pt;
              text-indent: 0pt;
              text-align: justify;
            "
          >
            Terms &amp; Conditions:
          </p>
          <ul id="">
            <li>
              <p
                class="s4"
                style="
                  padding-top: 1pt;
                  padding-left: 38pt;
                  padding-right: 44pt;
                  text-indent: -18pt;
                  line-height: 117%;
                  text-align: justify;
                "
              >
                • Offer not valid in conjunction with any other promotions &
                discounts.
              </p>
            </li>
            <li>
              <p
                class="s4"
                style="
                  padding-left: 38pt;
                  padding-right: 34pt;
                  text-indent: -18pt;
                  line-height: 114%;
                  text-align: justify;
                "
              >
                • Offer to be best offer for Thriwe Clients’
                customers/cardholders during the promotion duration.
              </p>
            </li>
            <li>
              <p
                class="s4"
                style="
                  padding-left: 38pt;
                  padding-right: 39pt;
                  text-indent: -18pt;
                  line-height: 115%;
                  text-align: left;
                "
              >
                • Offer are only valid with payment made using a Thriwe Clients’
                customers/cardholders credit or Debit Card.
              </p>
            </li>
          </ul>
        </td>
        <td style="width: 222pt">
          <p
            class="s2"
            style="
              padding-top: 8pt;
              padding-left: 148pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            الشروط والأحكام :
          </p>
          <div style="display: flex">
            <div style="width: 90%; text-align: end">
              لا يسري العرض مع أي ترويج أو تخفيضات أخرى.
            </div>
            <div style="width: 10%; text-align: end">•</div>
          </div>
          <div style="display: flex">
            <div style="width: 90%; text-align: end">
              يجب أن يمثل العرض ، أفضل العروض لعملاء / حملة بطاقات ثريوي أثناء
              فترة الترويج.
            </div>
            <div style="width: 10%; text-align: end">•</div>
          </div>
          <p
            class="s18"
            style="
              padding-top: 2pt;
              padding-left: 1pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            ءلامعل<span class="s2"> </span
            ><span class="s6">ضورعلا لضفأ ، ضرعلا لثمي نأ بجي </span
            ><span class="s20"></span>
          </p>
          <p
            class="s6"
            style="
              padding-top: 2pt;
              padding-left: 28pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            .جيورتلا ةرتف ءانثأ يويرث تاقاطب ةلمح /
          </p>
          <p
            class="s6"
            style="
              padding-top: 2pt;
              padding-left: 1pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            ةقاطب مادختساب عفدلا ةلاح يف طقف ضرعلا يرسي
            <span class="s20"></span>
          </p>
          <p
            class="s6"
            style="
              padding-top: 2pt;
              padding-left: 1pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            وأ نامتئلاا تاقاطب ةلمح /ءلامعلل يويرث نامتئا
          </p>
          <p
            class="s6"
            style="
              padding-top: 2pt;
              padding-left: 156pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            . لجلآا
          </p>
        </td>
      </tr>
      <tr style="height: 183pt">
        <td style="width: 240pt">
          <p
            class="s15"
            style="
              padding-top: 7pt;
              padding-left: 2pt;
              padding-right: 43pt;
              text-indent: 20pt;
              line-height: 114%;
              text-align: left;
            "
          >
          ${
            dummyData?.formData?.brand_name
          }                <span class="s3">hereby undertakes the following:</span>
          </p>
          <ul id="l3">
            <li data-list-text="o">
              <p
                class="s4"
                style="
                  padding-left: 38pt;
                  padding-right: 37pt;
                  text-indent: -18pt;
                  line-height: 113%;
                  text-align: left;
                "
              >
                Offer to be best offer for Thriwe Clients’
                <u><b>customers/</b></u
                ><b> </b>Cardholders during the promotion duration.
              </p>
            </li>
            <li data-list-text="o">
              <p
                class="s4"
                style="
                  padding-left: 38pt;
                  padding-right: 34pt;
                  text-indent: -18pt;
                  line-height: 113%;
                  text-align: left;
                "
              >
                Thriwe Clients’<u><b> customers/</b></u
                ><b> </b>Cardholders customers entitled for the offer
                automatically on presenting their Thriwe Clients’<u
                  ><b> customers/</b></u
                ><b> </b>Cardholders Debit or credit card.
              </p>
            </li>
            <li data-list-text="o">
              <p
                class="s4"
                style="
                  padding-left: 38pt;
                  padding-right: 52pt;
                  text-indent: -18pt;
                  line-height: 112%;
                  text-align: left;
                "
              >
                Ensure that the offer is provided in a professional and diligent
                manner.
              </p>
            </li>
          </ul>
        </td>
        <td style="width: 222pt">
          <p
            class="s6"
            style="
              padding-top: 8pt;
              padding-left: 1pt;
              padding-right: 20pt;
              text-indent: 45pt;
              line-height: 115%;
              text-align: left;
            "
          >
            : يلي امب دهعتلا متي اذهب ----------------ضورعلا لضفأ ، ضرعلا لثمي
            نأ بجي <span class="s21">o </span>ءانثأ يويرث تاقاطب ةلمح / ءلامع
            نئابزل
          </p>
          <p
            class="s6"
            style="
              padding-left: 1pt;
              padding-right: 20pt;
              text-indent: 114pt;
              line-height: 110%;
              text-align: left;
            "
          >
            .جيورتلا ةرتف يويرث تاقاطب ةلمح / ءلامع نئابز قحتسي
            <span class="s21">o </span>زاربإ دنع
            <span class="s19">ً</span>ايئاقلت ضرعلا ىلع لوصحلا
          </p>
          <p
            class="s6"
            style="
              padding-top: 1pt;
              padding-left: 1pt;
              padding-right: 20pt;
              text-indent: 8pt;
              line-height: 120%;
              text-align: left;
            "
          >
            يويرث ءلامع نئابز لجآ / نامتئا تاقاطب ةقيرطب مدقم ضرعلا نوكي نأ نم
            دكأتلا <span class="s21">o</span>
          </p>
          <p
            class="s6"
            style="
              padding-left: 102pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: left;
            "
          >
            . ةنقتمو ةيفارتحا
          </p>
        </td>
      </tr>
      <tr style="height: 119pt">
        <td style="width: 240pt">
          <p
            class="s4"
            style="
              padding-top: 7pt;
              padding-left: 2pt;
              text-indent: 0pt;
              line-height: 114%;
              text-align: left;
            "
          >
            Thriwe Clients’<u><b> customers/</b></u
            ><b> </b>Cardholders <b>hereby undertakes the following:</b>
          </p>
          <ul id="l4">
            <li data-list-text="o">
              <p
                class="s4"
                style="
                  padding-left: 38pt;
                  padding-right: 37pt;
                  text-indent: -18pt;
                  line-height: 113%;
                  text-align: left;
                "
              >
                Communicate the offer on Dubai Islamic Bank/ Emirates Islamic
                Bank Cardholders website
              </p>
            </li>
            <li data-list-text="o">
              <p
                class="s4"
                style="padding-left: 38pt; text-indent: -18pt; text-align: left"
              >
                Internal broadcast to the staff
              </p>
            </li>
            <li data-list-text="o">
              <p
                class="s4"
                style="
                  padding-left: 38pt;
                  padding-right: 54pt;
                  text-indent: -18pt;
                  line-height: 14pt;
                  text-align: left;
                "
              >
                Communicate the offer through Website, Deals App, Social,
                Emailers
              </p>
            </li>
          </ul>
        </td>
        <td style="width: 222pt">
          <p style="font-weight: 600">
            بهذا يتعهد زبائن عملاء \ حملة بطاقات ثريوي بما يلي :
          </p>
          <div style="display: flex">
            <div style="width: 90%; text-align: end">
              نشر العرض على مواقع بنك دبي الإسلامي / بنك الإمارات الإسلامي،
              الخاص بحملة البطاقات.
            </div>
            <div style="width: 10%; text-align: end">o</div>
          </div>
          <div style="display: flex">
            <div style="width: 90%; text-align: end">
              التعميم الداخلي للموظفين
            </div>
            <div style="width: 10%; text-align: end">o</div>
          </div>
          <div style="display: flex">
            <div style="width: 90%; text-align: end">
              نشر العرض من خلال الموقع الإلكتروني، تطبيقات ديلز، الاجتماعية،
              والبريد الإلكتروني
            </div>
            <div style="width: 10%; text-align: end">o</div>
          </div>
        </td>
      </tr>
    </table>
    <p style="text-indent: 0pt; text-align: left" />
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <table
      style="border-collapse: collapse; margin-left: 5.9pt"
      cellspacing="0"
    >
      <tr style="height: 34pt">
        <td style="width: 224pt">
          <p
            class="s3"
            style="
              padding-left: 16pt;
              padding-right: 28pt;
              text-indent: 0pt;
              line-height: 114%;
              text-align: left;
            "
          >
          <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;" ${
            dummyData?.formData?.mou_type != "Offer" ? "checked" : ""
          }>
            Acceptance of Thriwe Vouchers at Merchant outlets.
          </p>
        </td>
        <td style="width: 228pt">
          <p
            class="s2"
            style="
              padding-top: 1pt;
              padding-left: 90pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            قبول سندات ثريوي في منافذ التجار
          </p>
        </td>
        <td style="width: 12pt">
          <p
            class="s9"
            style="padding-left: 1pt; text-indent: 0pt; text-align: left"
          >
          <input type="checkbox" value="" style="box-sizing: border-box;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;" ${
            dummyData?.formData?.mou_type != "Offer" ? "checked" : ""
          }>&nbsp;
          </p>
        </td>
      </tr>
      <tr style="height: 26pt">
        <td style="width: 224pt">
          <p
            class="s10"
            style="
              padding-top: 7pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            WHEREAS<span class="s11">:</span>
          </p>
          <p
            class="s11"
            style="
              padding-top: 3pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            1. The Merchant owns and runs an outlet by the name of
            [${dummyData?.formData?.brand_name}] (“Outlet”).
          </p>
          <p
            class="s11"
            style="
              padding-top: 3pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            2. Thriwe is authorized on behalf of the Thriwe Clients (defined
            hereinafter) to enter into this MoU.
          </p>
          <p
            class="s11"
            style="
              padding-top: 3pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            3. The Merchant is desirous to participate in the Thriwe Voucher
            Program and agreed to offer commission to Thriwe on voucher value
          </p>
        </td>
        <td style="width: 240pt" colspan="2" rowspan="11">
          <p
            class="s2"
            style="
              padding-top: 8pt;
              padding-left: 198pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            الحيثيات :
          </p>
          <div style="display: flex">
            <div style="width: 90%; text-align: end">
              يمتلك التاجر ويدير منافذ باسم (-----------) ("المنافذ")
            </div>
            <div style="width: 10%; text-align: end">-1</div>
          </div>
          <div style="display: flex">
            <div style="width: 90%; text-align: end">
              ثريوي مفوضة نيابة عن عملاء ثريوي (يرد تعريفها فيما يلي) للدخول في
              مذكرة التفاهم هذه
            </div>
            <div style="width: 10%; text-align: end">-2</div>
          </div>
          <div style="display: flex">
            <div style="width: 90%; text-align: end">
              يرغب التاجر في المشاركة في برنامج سندات ثريوي ويوافق على منحعمولة
              إلى ثريوي حسب قيمة السند .
            </div>
            <div style="width: 10%; text-align: end">-3</div>
          </div>
        </td>
      </tr>
      <tr style="height: 18pt"></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr style="height: 54pt">
        <td style="width: 224pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s3"
            style="
              padding-left: 3pt;
              padding-right: 28pt;
              text-indent: 0pt;
              line-height: 114%;
              text-align: left;
            "
          >
            Participating Programs: Thriwe Vouchers in Dubai, United Arab
            Emirates
          </p>
        </td>
        <td style="width: 240pt" colspan="2">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s6"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
            البرامج المشاركة: سندات ثريوي في دبي ، الإمارات العربية المتحدة .
          </p>
        </td>
      </tr>
      <tr style="height: 23pt">
        <td style="width: 224pt">
          <p
            class="s11"
            style="
              padding-top: 7pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
              line-height: 114%;
            "
          >
            <span class="s10"> TERM AND TERMINATION </span> - This MOU shall be
            valid for the period of 1 year i.e. from date of signing
            Agreement/MOU. Both the Parties may mutually agree in writing to
            terminate this MOU anytime during the subsistence of this MOU by
            providing prior written notice of such termination, of at least 30
            days.
          </p>
        </td>
        <td style="width: 240pt" colspan="2" rowspan="7">
          <p
            class="s6"
            style="
              padding-top: 8pt;
              padding-left: 18pt;
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 120%;
              text-align: justify;
            "
          >
            الشروط والإنهاء – تسري مذكرة التفاهم هذه لمد 1سنة، أي من تاريخ توقيع
            الاتفاقية / مذكرة التفاهم. يحق للطرفين الاتفاق كتابة على إنهاء مذكرة
            التفاهم هذه في أي وقت أثناء سريانها من خلال تقديم إشعار خطي بذلك
            الإنهاء قبل 30 يوم على الأقل.
          </p>
        </td>
      </tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr style="height: 34pt">
        <td style="width: 224pt">
          <p
            class="s10"
            style="
              padding-top: 7pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            1. OBLIGATIONS OF THE MERCHANT -
          </p>
        </td>
        <td style="width: 240pt" colspan="2">
          <div style="display: flex">
            <div class="s10" style="width: 90%; text-align: end">
              التزامات التاجر :
            </div>
            <div class="s10" style="width: 10%; text-align: end">-1</div>
          </div>
        </td>
      </tr>
      <tr style="height: 28pt">
        <td style="width: 224pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s11"
            style="
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
              line-height: 114%;
            "
          >
            <span class="s10">1.1.</span> The Merchant shall be solely
            responsible for the delivery, service, suitability, merchantability,
            availability and quality, of and with regard to the products/
            services made available to Customers under the Offer and shall offer
            the standard service providers warranties in respect of the services
            provided. The Merchant shall inform Thriwe in case it starts any new
            Outlets and the Offer will get automatically extended to these new
            Outlets for entire Offer Period.
          </p>
        </td>
        <td style="width: 193pt" rowspan="12">
          <p
            class="s6"
            style="
              padding-top: 11pt;
              padding-left: 18pt;
              text-indent: 0pt;
              text-align: justify;
            "
          >
            يكون التاجر وحده مسئولاً عن توصيل المنتجات / الخدمات موضوع العرض،
            وصيانتها، ومناسبتها للغرض، وقابليتها للتسويق ووفرتها وكميتها، كما
            يقدم ضمانات الخدمات القياسية الخاصة بالخدمات الموفرة. يلتزم التاجر
            بإشعار ثريوي في حالة تأسيس أي منافذ جديدة ويصبح العرض ممتد تلقائياً
            ليشمل هذه المنافذ الجديدة طوال فترة العرض.
          </p>
        </td>
        <td style="width: 47pt" rowspan="12">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s7"
            style="padding-left: 9pt; text-indent: 0pt; text-align: left"
          >
            1<span class="s6">-</span>1
          </p>
        </td>
      </tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
    </table>
    <p style="text-indent: 0pt; text-align: left" />
    <table
      style="border-collapse: collapse; margin-left: 7.308pt"
      cellspacing="0"
    >
      <tr style="height: 15pt">
        <td style="width: 223pt">
          <p
            class="s11"
            style="
              padding-right: 18pt;
              padding-top: 18pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: left;
            "
          >
          <span class="s10">1.2.</span> The Merchant shall further be responsible and liable for
            all/any disputes, queries, complaints and contentions raised by
            Customers including but not limited to, delivery, service,
            suitability, merchantability, availability or quality of the food,
            products and/or services offered by the Merchant. These disputes,
            queries, complaints or contentions include disputes raised by the
            Customers directly to the Merchant or disputes forwarded by the Bank
            to the Merchant which shall be attended to promptly and be
            satisfactorily resolved by the Merchant within 48 (forty-eight)
            hours. In the event the Bank is constrained to compensate the
            Customer on account of a dispute regarding delivery, service,
            suitability, merchantability, availability or quality of the
            Merchant’s food, products and/or services made available to
            Customers under this Offer, the Merchant shall be obligated to
            promptly and without demur compensate the Bank on account of the
            same.
          </p>
        </td>

        <td style="width: 223pt">
          <p
            class="s11"
            style="
              padding-right: 18pt;
              padding-top: 18pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: left;
            "
          >
            يتحمل التاجر المسئولية عن كل وأي نزاعات أو مساءلة أو شكاوى يرفعها
            العملاء ويشمل ذلك دون حصر التوصيل ، الصيانة، المناسبة للغرض،
            القابلية للتسويق ووفرة وجودة الأطعمة والمنتجات و / أو الخدمات
            المقدمة من التاجر. هذه النزاعات ، المساءلة، والشكاوى تشمل النزاعات
            المرفوعة من العملاء مباشرة إلى التاجر أو النزاعات التي يتم إحالتها
            من البنك إلى التاجر والتي يجب العناية بها فوراً ويتم حلها بصورة
            مرضية من قبل التاجر خلال 48 (ثمان وأربعين) ساعة . إذا كان البنك ملزم
            بتعويض العميل مقابل نزاع يتعلق بتوصيل، صيانة المناسبة للعرض، قابلية
            تسويقوفرة أو جودةأطعمة ، منتجات و / أو خدمات التاجر التي تم توفيرها
            للعميل بموجب هذا العرض ، يصبح التاجر بالمقابل ملزم بتعويض البنك
            فوراً ودون أي اعتراض .
          </p>
        </td>
        <td style="width: 47pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s7"
            style="padding-left: 9pt; text-indent: 0pt; text-align: left"
          >
            2<span class="s6">-</span>1
          </p>
        </td>
      </tr>
      <tr style="height: 74pt">
        <td style="width: 223pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s11"
            style="
              padding-left: 23pt;
              padding-right: 18pt;
              text-indent: -21pt;
              line-height: 114%;
              text-align: justify;
            "
          >
            <span class="s10">1.3</span> Thriwe shall deploy from time to time
            promotional material at merchant outlets in the form of Tent cards,
            Standees.
          </p>
        </td>
        <td style="width: 193pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s6"
            style="
              padding-left: 9pt;
              padding-right: 10pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            تستخدم ثريوي من وقت لآخر مواد ترويجية في منافذ التاجر تكون في شكل
            بطاقات تنت، أو استاندات .
          </p>
        </td>
        <td style="width: 28pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s7"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
            3<span class="s6">-</span>1
          </p>
        </td>
      </tr>
      <tr style="height: 78pt">
        <td style="width: 223pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s11"
            style="
              padding-left: 23pt;
              padding-right: 18pt;
              text-indent: -21pt;
              line-height: 114%;
              text-align: justify;
            "
          >
            <span class="s10">1.4.</span> The Merchant shall allow the third
            party appointed by the Thriwe Clients to survey the Marketing
            Material on a working day and within business hours.
          </p>
        </td>
        <td style="width: 193pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s6"
            style="
              padding-left: 9pt;
              padding-right: 9pt;
              text-indent: 0pt;
              line-height: 120%;
              text-align: right;
            "
          >
            يسمح التاجر للطرف الثالث المعين من عملاء ثريوي بمراقبة مواد التسويق
            في يوم عمل وخلال ساعات الدوام الرسمية .
          </p>
        </td>
        <td style="width: 28pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s7"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
            4<span class="s6">-</span>1
          </p>
        </td>
      </tr>
      <tr style="height: 65pt">
        <td style="width: 223pt">
          <p
            class="s11"
            style="
              padding-top: 7pt;
              padding-left: 23pt;
              padding-right: 18pt;
              text-indent: -21pt;
              line-height: 114%;
              text-align: justify;
            "
          >
          <span class="s10">1.5.</span> The merchant will use platform provided by Thriwe to validate
            and redeem the vouchers. Payout will only be given for the redeemed
            vouchers.
          </p>
        </td>
        <td style="width: 193pt">
          <p
            class="s6"
            style="
              padding-top: 8pt;
              padding-left: 18pt;
              text-indent: 0pt;
              line-height: 120%;
              text-align: left;
            "
          >
            على التاجر استخدام المنصة التي توفرها ثريوي لاعتماد وتحصيل السندات.
            يتم فقط صرف السندات التي تم اعتمادها وتحصيلها.
          </p>
        </td>
        <td style="width: 28pt">
          <p
            class="s7"
            style="
              padding-top: 8pt;
              padding-right: 2pt;
              text-indent: 0pt;
              text-align: right;
            "
          >
            5<span class="s6">-</span>1
          </p>
        </td>
      </tr>
      <!-- </table>
    <table
      style="border-collapse: collapse; margin-left: 7.308pt"
      cellspacing="0"
    > -->
      <tr style="height: 15pt">
        <td style="width: 222pt">
          <p
            class="s11"
            style="
              padding-right: 18pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: left;
            "
          >
          <span class="s10">1.6.</span> Thriwe will create denomination basis the requirement of Thriwe
            Clients or use standard denomination (e.g.: AED 50, AED 100, AED
            250, AED 500, AED 750, AED 1000, AED 2000)
          </p>
        </td>
        <td style="width: 191pt">
          <p
            class="s6"
            style="
              padding-left: 18pt;
              padding-right: 6pt;
              text-indent: 0pt;
              line-height: 121%;
              text-align: justify;
            "
          >
            تضع ثريوي أسس تحديد العملة لعملاء ثريوي أو استخدام العملة القياسية
            (أي / درهم إماراتي 50، درهم إماراتي 100، درهم إماراتي 250، درهم
            إماراتي 500، درهم إماراتي 750، درهم إماراتي 1000، درهم إماراتي 2000)
          </p>
        </td>
        <td style="width: 35pt">
          <p
            class="s7"
            style="
              padding-left: 13pt;
              text-indent: 0pt;
              line-height: 14pt;
              text-align: right;
            "
          >
            6<span class="s6">-</span>1
          </p>
        </td>
      </tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr style="height: 55pt">
        <td style="width: 222pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s11"
            style="
              padding-left: 23pt;
              padding-right: 12pt;
              text-indent: -21pt;
              line-height: 114%;
              text-align: left;
            "
          >
          <span class="s10">1.7.</span> Thriwe will share invoice with merchant once every month
            against the commission.
          </p>
        </td>
        <td style="width: 191pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s6"
            style="padding-right: 7pt; text-indent: 0pt; text-align: right"
          >
            ستقوم ثريوي بمشاركة الفاتورة مع التاجر مرة واحد كل شهر مقابل العمولة
            .
          </p>
        </td>
        <td style="width: 35pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s7"
            style="padding-left: 13pt; text-indent: 0pt; text-align: right"
          >
            7<span class="s6">-</span>1
          </p>
        </td>
      </tr>
      <tr style="height: 27pt">
        <td style="width: 222pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s11"
            style="
              padding-right: 17pt;
              text-indent: 0pt;
              text-align: left;
              line-height: 114%;
            "
          >
          <span class="s10">1.8.</span> The Merchant shall raise the Bill of Supply/Tax Invoice for the
            value of voucher (Voucher value minus commission). Merchant shall
            also have an option to raise a consolidated Bill of Supply for each
            month. The voucher value shall be determined basis the below
            formula: Voucher value = Voucher value - Commission (Excluding
            taxes. For example - e.g.: 500 - 50 (10% commission) = Rs.450.
          </p>
        </td>
        <td style="width: 191pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s6"
            style="padding-left: 18pt; text-indent: 0pt; text-align: left"
          >
            يقوم التاجر برفع فاتورة التوريد / الفاتورة الضريبية بقيمة السند
            (قيمة السند ناقصاً العمولة) . وكذلك يكون لدى العميل الخيار في توحيد
            فاتورة التوريد عن كل شهر. سيكون أساس تحديد قيمة السند حسب المعادلة
            التالية قيمة السند = قيمة السند – العمولة (غير شامل الضريبة – على
            سبيل المثال : 500 -50 (عمولة 10%) = 450
          </p>
          <td style="width: 35pt">
            <p style="text-indent: 0pt; text-align: left"><br /></p>
            <p
              class="s7"
              style="padding-left: 13pt; text-indent: 0pt; text-align: right"
            >
              8<span class="s6">-</span>1
            </p>
          </td>
        </td>
      </tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr></tr>
      <tr style="height: 23pt">
        <td style="width: 222pt">
          <p
            class="s11"
            style="
              padding-top: 8pt;
              padding-right: 18pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
          <span class="s10">1.9.</span>	In addition to that above, the Merchant agrees that VAT shall be applicable on commission and the same will be deducted by Thriwe and deposited.
          </p>
        </td>
        <td style="width: 191pt" rowspan="4">
          <p
            class="s6"
            style="
              padding-top: 8pt;
              padding-right: 7pt;
              text-indent: 0pt;
              line-height: 120%;
              text-align: right;
            "
          >
             إضافة إلى ما ورد أعلاه ، يوافق التاجر أن تطبيق ضريبة القيمة المضافة على العمولة ويتم الخصم والإيداع بواسطة ثريوي . 
          </p>
          <td style="width: 35pt">
            <p style="text-indent: 0pt; text-align: left"><br /></p>
            <p
              class="s7"
              style="padding-left: 13pt; text-indent: 0pt; text-align: right"
            >
              9<span class="s6">-</span>1
            </p>
          </td>
        </td>
      </tr>
      <tr >
      </tr>
      <tr >
      </tr>
      <tr>
      </tr>
      <tr style="height: 23pt">
        <td style="width: 222pt">
          <p
            class="s11"
            style="
              padding-top: 8pt;
              padding-right: 18pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
          <span class="s10">1.10.</span>	Thriwe will transfer funds to merchant account once every week for the redeemed voucher. Thriwe will inform via email, the details of bank account in which fund will be transferred by Thriwe. Voucher value shall be determined basis the below formula:          </p>
        <p
          class="s11"
          style="
            padding-top: 8pt;
            padding-right: 18pt;
            text-indent: 0pt;
            text-align: left;
          "
        >
        Thriwe will transfer funds either Tuesday or Thursday and same will be informed to merchant via email. Thriwe will transfer last seven days funds against redeemed voucher.      
        </p>
        <p
        class="s11"
        style="
          padding-top: 8pt;
          padding-right: 18pt;
          text-indent: 0pt;
          text-align: left;
        "
      >
      Fund Transfer value = Voucher value – (Commission + VAT)
      e.g.: AED 500 is Voucher value and commission is 15% payout will be
              AED 500 – (75 + 3.75) = AED 421.25 is the payout to merchant
        </p>
        </td>
        <td style="width: 191pt" rowspan="14">
          <p
            class="s6"
            style="
              padding-top: 8pt;
              padding-left: 18pt;
              text-indent: 0pt;
              text-align: justify;
            "
          >
              تلتزم ثريوي بتحويل المبلغ إلى حساب التاجر  مرة واحدة كل أسبوع عن السندات المحصلة. ستقوم ثريوي عن طريق البريد الإلكتروني بالإشعار بتفاصيل الحساب المصرفي  الذي سيتم في التحويل إليه من ثريوي ، يتم تحديد قيمة السند على أساس المعادلة أدناه:
          تقوم ثريوي بتحويل المبالغ إما في يوم الثلاثاء أو الخميس ويتم إشعار التاجر بذلك عبر البريد الإلكتروني .           
          </p>
          <p
            class="s6"
            style="
              padding-top: 2pt;
              padding-left: 18pt;
              padding-right: 7pt;
              text-indent: 0pt;
              line-height: 121%;
              text-align: justify;
            "
          >
          تقوم ثريوي بتحويل مبالغ الأسبوع الماضي مقابل السندات التي تم تحصيلها . 
          قيم المبالغ المحولة = قيمة السند – (العمولة + ضريبة القيمة المضافة).           
          </p>
          <p
            class="s6"
            style="
              padding-left: 18pt;
              padding-right: 6pt;
              text-indent: 30pt;
              line-height: 120%;
              text-align: justify;
            "
          >
          مثال: قيمة السند 500 درهم إماراتي والعمولة 15%فسيكون المبلغ المذفوع 500 درهم إماراتي – (75 +3.75) = 421.25 درهم إماراتي مستحقة للتاجر . 
          </p>
        </td>
        <td style="width: 35pt" rowspan="14">
          <p
            class="s7"
            style="
              padding-top: 8pt;
              padding-left: 6pt;
              text-indent: 0pt;
              text-align: right;
            "
          >
            10<span class="s6">-</span>1
          </p>
        </td>
      </tr>
      <tr >
       
      </tr>
      <tr >
       
      </tr>
      <tr >
       
      </tr>
      <tr >
     
      </tr>
      <tr >
        
      </tr>
      <tr >
       
      </tr>
      <tr >
       
      </tr>
      <tr >
     
      </tr>
      <tr >
      
      </tr>
      <tr >
     
      </tr>
      <tr>
      </tr>
      <tr >
      
      </tr>
      <tr>
       
      </tr>
    </table>
    <table
      style="border-collapse: collapse; margin-left: 7.308pt"
      cellspacing="0"
    >
      <tr>
      </tr>
      <tr >
      </tr>
      <tr >
      </tr>
      <tr>
      </tr>
      <tr style="height: 31pt">
        <td style="width: 223pt">
          <p
            class="s25"
            style="
              padding-top: 8pt;
              padding-left: 2pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            DETAILS OF THE PROGRAMS
          </p>
        </td>
        <td style="width: 240pt">
          <p
            class="s18"
            style="
              padding-top: 8pt;
              padding-right: 2pt;
              text-indent: 0pt;
              text-align: right;
            "
          >
          تفاصيل البرامج : 
          </p>
        </td>
      </tr>
      <tr style="height: 192pt">
        <td style="width: 223pt">
          <p
            class="s11"
            style="
              padding-top: 8pt;
              padding-left: 2pt;
              padding-right: 18pt;
              text-indent: 0pt;
              line-height: 114%;
              text-align: justify;
            "
          >
          Thriwe shall create a platform and onboard merchants from different categories like dining, salons, shopping, among others and will create a system to generate vouchers of different denomination on real time basis. Users can visit the platform and generate vouchers of defined denomination and balance will be deducted as per voucher value. Outlet operator can redeem the voucher and provide discount to user. Thriwe will make payment every week (Tuesday or Thursday) of the voucher redeemed in the last 7 days.
          </p>
        </td>
        <td style="width: 240pt">
          <p
            class="s6"
            style="
              padding-top: 8pt;
              padding-left: 18pt;
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 120%;
              text-align: justify;
            "
          >
          ستقوم ثريوي بإنشاء منصة وإدراج تجار من فئات مختلفة مثل المطاعم، الصالونات، مراكز التسوق من ضمن جهات أخرى، كما ستقوم بإيجاد نظام لاستخراج فواتير بفئات مختلفة على أساس الزمن الحقيقي. يستطيع المستخدمون زيارة المنصة واستخراج سندات بفئات محددة  وسيتم خصم الرصيد حسب قيمة السند. يستطيع المنفذ تحصيل السند وإعطاء خصم للمستخدم . ستقوم ثريوي بالدفع كل أسبوع (الثلاثاء أو الخميس) مقابل السندات المحصل خلال الأيام السبعة الماضية. 
          </p>
        </td>
      </tr>
      <tr style="height: 24pt">
        <td style="width: 223pt">
          <p
            class="s11"
            style="
              padding-top: 8pt;
              padding-left: 2pt;
              text-indent: 0pt;
              text-align: left;
              line-height: 114%;
            "
          >
          Merchant will have to accept Thriwe voucher till last date of voucher validity. E.g.: If program is valid till 31-Mar and customer generates voucher on 29-Mar with validity of 30 days. Merchant will accept the voucher till 27-Apr. Validity will be mentioned in each voucher.
          </p>
        </td>
        <td style="width: 240pt" rowspan="6">
          <p
            class="s6"
            style="
              padding-top: 8pt;
              padding-left: 18pt;
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 115%;
              text-align: justify;
            "
          >
          يتعين على التاجر قبول سندات ثريوي حتى آخر يوم من تاريخ صلاحية السند مثلاً: إذا كان البرنامج سارياً حتى 31 مارس وقام العميل باستخراج السند يوم 29 مارس بصلاحية لمدة 30 يوم، يتعين على التاجر قبول السند حتى 27 أبريل. سيتم تحديد تاريخ الصلاحية في كل سند . 
        </p>
        </td>
    </table>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <table
      style="border-collapse: collapse; margin-left: 14.738pt"
      cellspacing="0"
    >
      <tr style="height: 53pt">
        <td
          style="
            width: 114pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s26"
            style="
              padding-left: 37pt;
              padding-right: 47pt;
              text-indent: 0pt;
              line-height: 114%;
              text-align: left;
            "
          >
            Offer(s) العروض
          </p>
        </td>
        <td
          style="
            width: 347pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s27"
            style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 114%;
              text-align: left;
            "
          >
            Any denomination between AED<u> 50 to AED 9999</u> voucher to be
            uploaded in platform for user access
          </p>
          <p
            class="s17"
            style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 12pt;
              text-align: left;
            "
          >
          أي سند تتراوح قيمته بين 50 إلى 9999 درهم إماراتي يتم تحميله على المنصة ليكون المستخدم قادر على الوصول إلية
          </p>
        </td>
      </tr>
      <tr style="height: 28pt">
        <td
          style="
            width: 114pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s26"
            style="
              padding-top: 1pt;
              padding-left: 7pt;
              padding-right: 46pt;
              text-indent: -1pt;
              line-height: 114%;
              text-align: left;
            "
          >
            Voucher Validity صلاحية السند 
          </p>
        </td>
        <td
          style="
            width: 347pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p class="s26" style="text-indent: 0pt; text-align: left">
            Thriwe will define Voucher validity
          </p>
          <p
            class="s17"
            style="padding-top: 1pt; text-indent: 0pt; text-align: left"
          >
          ستقوم ثريوي بتحديد سريان السند       
          </p>
        </td>
      </tr>
      <tr style="height: 38pt">
        <td
          style="
            width: 114pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s26"
            style="
              padding-left: 5pt;
              text-indent: 0pt;
              line-height: 114%;
              text-align: left;
            "
          >
            Program Validity (Start &amp; End Date)
          </p>
          <p
            class="s26"
            style="padding-left: 7pt; text-indent: 0pt; text-align: left"
          >
          صلاحية البرنامج ( البداية والنهاية ) 
          </p>
        </td>
        <td
          style="
            width: 347pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br />
          ${
            dummyData?.stores[0]?.start_validity_voucher
              ? dummyData?.stores[0]?.start_validity_voucher
              : ""
          } ${dummyData?.stores[0]?.end_validity_voucher ? "&" : ""} ${
    dummyData?.stores[0]?.end_validity_voucher
      ? dummyData?.stores[0]?.end_validity_voucher
      : ""
  }
          </p>
        </td>
      </tr>
      <tr style="height: 26pt">
        <td
          style="
            width: 114pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s26"
            style="
              padding-left: 5pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: left;
            "
          >
            Commission to Thriwe
          </p>
          <p
            class="s26"
            style="
              padding-top: 1pt;
              padding-left: 8pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
          عمولة ثرايف 
          </p>
        </td>
        <td
          style="
            width: 347pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br />${
            dummyData?.stores[0]?.commission_to_thriwe
              ? dummyData?.stores[0]?.commission_to_thriwe
              : ""
          }</p>
        </td>
      </tr>
      <tr style="height: 35pt">
        <td
          style="
            width: 114pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s26"
            style="
              padding-top: 3pt;
              padding-left: 8pt;
              padding-right: 14pt;
              text-indent: -2pt;
              line-height: 114%;
              text-align: left;
            "
          >
            Offer for Customer عروض العملاء 
          </p>
        </td>
        <td
          style="
            width: 347pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br />${
            dummyData?.offers[0]?.offer_text
              ? dummyData?.offers[0]?.offer_text
              : ""
          }</p>
        </td>
      </tr>
    </table>
    <table
      style="border-collapse: collapse; margin-left: 14.738pt"
      cellspacing="0"
    >
      <tr style="height: 76pt">
        <td
          style="
            width: 114pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s26"
            style="
              padding-left: 7pt;
              padding-right: 14pt;
              text-indent: -1pt;
              line-height: 90%;
              text-align: left;
            "
          >
            Terms &amp; Conditions: الشروط والاحكام <span class="s31">ر </span>لا
          </p>
        </td>
        <td
          style="
            width: 347pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <ol id="l5">
            <li data-list-text="1.">
              <p
                class="s26"
                style="padding-left: 41pt; text-indent: -18pt; text-align: left"
              >
                The above voucher can be utilized against services at the
                partner merchant.
              </p>
            </li>
            <li data-list-text="2.">
              <p
                class="s26"
                style="
                  padding-top: 1pt;
                  padding-left: 41pt;
                  text-indent: -18pt;
                  text-align: left;
                "
              >
                The voucher value is equal to a cash value for services availed
                atthe Merchant.
              </p>
            </li>
            <li data-list-text="3.">
              <p
                class="s26"
                style="
                  padding-top: 1pt;
                  padding-left: 41pt;
                  text-indent: -18pt;
                  text-align: left;
                "
              >
                The customer will state the intention to avail the offer before
                the bill is generated.
              </p>
            </li>
          </ol>
          <div style="display: flex">
            <div style="width: 95%; text-align: end">
                  يمكن استخدام السند مقابل الخدمات لدى التاجر الشريك 
            </div>
            <div style="width: 5%; text-align: end;padding-right: 10%;">.1</div>
          </div>
          <div style="display: flex">
            <div style="width: 95%; text-align: end;">
                 قيمة السند تساوي القيمة النقدية للخدمات المقدمة من التاجر
            </div>
            <div style="width: 5%; text-align: end;padding-right: 10%">.2</div>
          </div>
          <div style="display: flex">
            <div style="width: 95%; text-align: end;">
                 يقوم العميل بذكر القصد من توفير العرض قبل استحراج السند
            </div>
            <div style="width: 5%; text-align: end;padding-right: 10%">.3</div>
          </div>
        </td>
      </tr>
    </table>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <table
      style="border-collapse: collapse; margin-left: 7.308pt"
      cellspacing="0"
    >
      <tr style="height: 18pt">
        <td style="width: 229pt">
          <p
            class="s15"
            style="
              padding-left: 2pt;
              text-indent: 0pt;
              line-height: 10pt;
              text-align: left;
            "
          >
            Bank Details
          </p>
        </td>
        <td style="width: 233pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
      <tr style="height: 21pt">
        <td style="width: 229pt">
          <p
            class="s26"
            style="
              padding-top: 7pt;
              padding-left: 2pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Account Holder Name<span class="s34">::&nbsp; &nbsp; ${
              dummyData?.stores[0]?.merchant_name_written
                ? dummyData?.stores[0]?.merchant_name_written
                : ""
            }</span>
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="
              padding-top: 7pt;
              padding-right: 2pt;
              text-indent: 0pt;
              text-align: right;
            "
          >
          اسم صاحب الحساب
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s26"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Account Number:   ${
              dummyData?.stores[0]?.bank_account_number
                ? dummyData?.stores[0]?.bank_account_number
                : ""
            }
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
          رقم الحساب
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s26"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Bank Name:  ${
              dummyData?.stores[0]?.bank_name
                ? dummyData?.stores[0]?.bank_name
                : ""
            }
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
          اسم البنك 
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s26"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            BranchL:  ${
              dummyData?.stores[0]?.branch_name
                ? dummyData?.stores[0]?.branch_name
                : ""
            }
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: right;
            "
          >
          فرع البنك
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s26"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            IFSC Code:  ${
              dummyData?.stores[0]?.ifsc_code
                ? dummyData?.stores[0]?.ifsc_code
                : ""
            }
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s4"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
            IFSC <span class="s29">رمز </span>
          </p>
        </td>
      </tr>
      <tr style="height: 20pt">
        <td style="width: 229pt">
          <p
            class="s26"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Cancel Cheque Number
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
          رقم الشيك الملغي 
          </p>
        </td>
      </tr>
      <tr style="height: 24pt">
        <td style="width: 229pt">
          <p
            class="s28"
            style="
              padding-top: 5pt;
              padding-left: 2pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Registration Details
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s28"
            style="
              padding-top: 5pt;
              padding-right: 2pt;
              text-indent: 0pt;
              text-align: right;
            "
          >
          بيانات التسجيل 
          </p>
        </td>
      </tr>
      <tr style="height: 20pt">
        <td style="width: 229pt">
          <p
            class="s26"
            style="
              padding-top: 6pt;
              padding-left: 2pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            VAT Number:  ${dummyData?.stores?.vat_number}
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="
              padding-top: 7pt;
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: right;
            "
          >
          الرقم الضريبي 
          </p>
        </td>
      </tr>
      <tr style="height: 13pt">
        <td style="width: 229pt">
          <p
            class="s26"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Trade License
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: right;
            "
          >
          الترخيص التجاري
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s28"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            (To be Filled In Block Letters)
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s35"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
          (تعبأ بالأحرف الكبيرة )
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s26"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Name:  ${dummyData?.formData?.authorized_signatory_name}
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: right;
            "
          >
          الاسم 
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s26"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Legal Name: ${dummyData?.formData?.merchant_name}
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
          الاسم الرسمي 
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s26"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Brand Name: ${dummyData?.formData?.brand_name}
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
          اسم العلامة 
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s26"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Address: ${dummyData?.formData?.corporate_address}
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
          العنوان 
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s26"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Pin Code: ${
              dummyData?.formData?.registered_address_pincode
                ? dummyData?.formData?.registered_address_pincode
                : ""
            }
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: right;
            "
          >
          الرمز 
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s36"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Contact number: ${dummyData?.formData?.spoc_no}
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
          رقم التواصل
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s36"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Name of the Signatory:  ${
              dummyData?.formData?.authorised_signatory_name
            }
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
          اسم المفوض بالتوقيع 
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s36"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Designation: ${dummyData?.formData?.designation}
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
          الصفة 
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s36"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Mobile Number: ${
              dummyData?.formData?.authorised_signatory_number
                ? dummyData?.formData?.authorised_signatory_number
                : ""
            }
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: right;
            "
          >
          رقم الجوال 
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s36"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Email Id: ${dummyData?.formData?.authorized_signatory_mail}
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
          البريد الالكتروني 
          </p>
        </td>
      </tr>
      <tr style="height: 14pt">
        <td style="width: 229pt">
          <p
            class="s36"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Swipe Machine (Bank name): ${
              dummyData?.stores[0]?.tidANDMID[0]?.bankMachineName
            }
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s29"
            style="padding-right: 2pt; text-indent: 0pt; text-align: right"
          >
          نقاط البيع ( اسم البنك ) 
          </p>
        </td>
      </tr>
      <tr style="height: 13pt">
        <td style="width: 229pt">
          <p
            class="s36"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            TID #: ${dummyData?.stores[0]?.tidANDMID[0]?.tid}
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s32"
            style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 10pt;
              text-align: right;
            "
          >
          رقم تي آي دي 
          </p>
        </td>
      </tr>
      <tr style="height: 12pt">
        <td style="width: 229pt">
          <p
            class="s36"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            MID #: ${dummyData?.stores[0]?.tidANDMID[0]?.mid}
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s32"
            style="
              padding-right: 2pt;
              text-indent: 0pt;
              line-height: 10pt;
              text-align: right;
            "
          >
          رقم ام آي دي 
          </p>
        </td>
      </tr>
      <tr style="height: 32pt">
        <td style="width: 229pt">
          <p
            class="s37"
            style="
              padding-left: 2pt;
              text-indent: 0pt;
              line-height: 113%;
              text-align: left;
            "
          >
            IN WITNESS WHEREOF, this agreement has been executed the day and
            year first above written.
          </p>
        </td>
        <td style="width: 233pt">
          <p
            class="s38"
            style="padding-right: 3pt; text-indent: 0pt; text-align: right"
          >
          اعتمادا ً لذلك ، تم توقيع هذه الاتفاقية في اليوم والسنة المذكورة أعلاه
          </p>
        </td>
      </tr>
      <tr style="height: 94pt">
        <td style="width: 229pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s26"
            style="
              padding-left: 2pt;
              padding-right: 56pt;
              text-indent: 0pt;
              line-height: 170%;
              text-align: left;
            "
          >
            Signed by: <img src="${textSignature}" alt=""
            A duly authorised representative of
          </p>
          <p
            class="s27"
            style="padding-left: 2pt; text-indent: 0pt; text-align: left"
          >
            Thriwe Consulting FZ LLC
          </p>
          <p
            class="s26"
            style="
              padding-left: 2pt;
              padding-right: 159pt;
              text-indent: 0pt;
              line-height: 19pt;
              text-align: left;
            "
          >
         
            Name : ${dummyData?.formData?.authorised_signatory_name}
            <br/> Designation : ${dummyData?.formData?.designation}
          </p>
        </td>
        <td style="width: 233pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
          <p
            class="s26"
            style="
              padding-left: 7pt;
              padding-right: 52pt;
              text-indent: 0pt;
              line-height: 170%;
              text-align: left;
            "
          >
            Signed by:<img src="${textSignature}" alt=""> A duly authorised representative of
          </p>
          <p
            class="s27"
            style="padding-left: 7pt; text-indent: 0pt; text-align: left"
          >
            …………………………………………………..
          </p>
          <p
            class="s26"
            style="
              padding-left: 7pt;
              padding-right: 52pt;
              text-indent: 0pt;
              line-height: 19pt;
              text-align: left;
            "
          >
            Name:  ${dummyData?.formData?.authorised_signatory_name}
            <br/> Designation: ${dummyData?.formData?.designation} 
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
  if (templateType == 1) {
    return htmlString1;
  } else if (templateType == 2) {
    return htmlString2;
  } else if (templateType == 3) {
    return htmlString3;
  } else {
    return htmlString4;
  }
};

export default pdfTemplate;
