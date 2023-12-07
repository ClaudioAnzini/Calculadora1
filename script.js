let operacaoAtual = [];
let resultadoAtual = [];

function atualizarTela() {
    document.getElementById('operacao').innerText = conta;
    document.getElementById('ver-operacao').innerText = resultadoAtual;
}

function adicionarNumero(numero) {
    operacaoAtual += numero;
    atualizarTela();
}

function adicionarConta(operador) {
    if (operacaoAtual !== "")  {
        operacaoAtual += operador;
        atualizarTela();
    }
}

function adicionarPonto() {
    operacaoAtual += ".";
    atualizarTela();
}

function apagarNumeroErrado() {
    operacaoAtual = "";
    atualizarTela();
}

function apagarTudo() {
    operacaoAtual = "";
    resultadoAtual = "";
    atualizarTela();
    document.getElementById('btn-igual').focus();
}

function apagarUltimo() {
    operacaoAtual = operacaoAtual.slice(0, -1);
    atualizarTela();
}

let conta = operacaoAtual;

function calcularResultado() {
        resultadoAtual = eval(operacaoAtual);
        operacaoAtual = resultadoAtual.toString();
        atualizarTela();

}

document.addEventListener("keypress", (e) => {
    if (e.key == "1") {
        adicionarNumero("1");
    }
    if (e.key == "2") {
        adicionarNumero("2");
    }
    if (e.key == "3") {
        adicionarNumero("3");
    }
    if (e.key == "4") {
        adicionarNumero("4");
    }
    if (e.key == "5") {
        adicionarNumero("5");
    }
    if (e.key == "6") {
        adicionarNumero("6");
    }
    if (e.key == "7") {
        adicionarNumero("7");
    }
    if (e.key == "8") {
        adicionarNumero("8");
    }
    if (e.key == "9") {
        adicionarNumero("9");
    }
    if (e.key == "0") {
        adicionarNumero("0");
    }
    if (e.key == ".") {
        adicionarPonto(".");
    }
    if (e.key == "Enter") {
        calcularResultado();
    }
    if (e.key == "Backspace") {
        apagarNumeroErrado();
    }
    if (e.key == "+") {
        adicionarNumero("+");
    }
    if (e.key == "-") {
        adicionarNumero("-");
    }
    if (e.key == "/") {
        adicionarNumero("/");
    }
    if (e.key == "*") {
        adicionarNumero("*");
    }

    console.log(e.key)
})
