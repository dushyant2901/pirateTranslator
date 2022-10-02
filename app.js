const btnTranslate = document.querySelector("#btn");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/pirate.json";

const getTranslationURL = (input) => `${serverURL}?text=${input}`;

const errorHandler = (error) => {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
};
const showOutput = (data) => {
  outputDiv.innerText = data; // output
};

const clickHandler = () => {
  btnTranslate.textContent = "Translating......";
  const inputText = txtInput.value; // taking input

  //calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      setTimeout(() => {
        btnTranslate.textContent = "Translate";
      }, 2000);
      showOutput(json.contents.translated);
    })
    .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickHandler);
