var btn = document.querySelector("#btn-translate");
var input = document.querySelector("#txt-input");
var output = document.querySelector("#output");
var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
function constructURL(txtinput){
    return serverURL+"?"+"text="+txtinput
}
function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with server please try again later")
}

function clickEventHandler(){
var userInput=input.text

fetch(constructURL(userInput))
.then(response => response.json())
.then(json => {
var translatedText= json.contents.translated
output.innerHTML= translatedText;
}
  )
  .catch(errorHandler)
};

btn.addEventListener( "Click", clickEventHandler );