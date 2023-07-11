// Make sure to include the Google Translate API script in your HTML file
// <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

// Function to translate English to Arabic
function translateEnglishToArabic(text, callback) {
  // Create an iframe element
  var iframe = document.createElement("iframe");
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  // Set the source URL with the translation parameters
  iframe.src =
    "https://translate.google.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=" +
    encodeURI(text);

  // Handle the iframe's load event
  iframe.onload = function () {
    var translatedText = iframe.contentWindow.document.body.innerText;

    // Clean up the iframe
    document.body.removeChild(iframe);

    // Execute the callback function with the translated text
    if (typeof callback === "function") {
      callback(translatedText);
    }
  };
}

// Example usage
var englishText = "Hello";

translateEnglishToArabic(englishText, function (arabicText) {
  console.log(arabicText);
});
