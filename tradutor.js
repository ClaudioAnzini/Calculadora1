const linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src = "./idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

const linguaInglesa = document.createElement("script");
linguaInglesa.src = "./idiomas/english.js";
document.head.appendChild(linguaInglesa);

const linguaEspanhola = document.createElement("script");
linguaEspanhola.src = "./idiomas/espanol.js";
document.head.appendChild(linguaEspanhola);

const linguaFrancesa = document.createElement("script");
linguaFrancesa.src = "./idiomas/francais.js";
document.head.appendChild(linguaFrancesa);

const linguaRussa = document.createElement("script");
linguaRussa.src = "./idiomas/russo.js";
document.head.appendChild(linguaRussa);

let idioma = document.getElementById("idioma");
idioma.addEventListener("change", function() {
    translate(this.value);

})

function translate(idioma) {
    let traducao = 
        (idioma == "br") ? portugues()
        : (idioma == "en") ? english()
        : (idioma == "es") ? espanol()
        : (idioma == "fr") ? francais()
        : (idioma == "ru") ? russo()
        : null;
    setLanguage(traducao);   
}

function setLanguage(traducao) {

    calc = document.getElementById("calc");
    calc.innerText= traducao.calc;
}