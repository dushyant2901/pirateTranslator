var btnTranslate = document.querySelector("#btn");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";
function constructURL(input){
    return serverURL+ "?"+ "text="+ input;
}
function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with server please try again later");
}

function clickHandler(){
var inputText = txtInput.value;

fetch(constructURL(inputText))
.then(response => response.json())
.then(json => {
var translatedText= json.contents.translated;
outputDiv.innerText= translatedText;
}
  )
  .catch(errorHandler)
};

btnTranslate.addEventListener("Click",clickHandler);