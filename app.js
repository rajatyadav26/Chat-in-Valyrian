var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var divOutput = document.querySelector("#output");

//var urlTranslate = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var urlTranslate = "https://api.funtranslations.com/translate/valyrian.json";

function translationUrl(text) {
    return urlTranslate + "?" + "text=" + text
};

/*function errorHandler(error) {
    console.log("error occured", error);
    alert("Something went wrong! Try again after some time ");
}*/

function clickHandler() {
    var inputText = textInput.value; //input

    //calling server for response

    fetch(translationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            divOutput.innerText = translatedText // output
        })
        //.catch(errorHandler);
};

btnTranslate.addEventListener("click", clickHandler)