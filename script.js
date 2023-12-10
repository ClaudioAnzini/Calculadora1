let operacaoAtual = [];
let resultadoAtual = [];

function adicionarNumero(numero) {
    if (resultadoAtual !== "") {
        operacaoAtual = "";
        resultadoAtual = "";
    }
    operacaoAtual += numero;
    atualizarTela();
}

function adicionarConta(operador) {
    if (operacaoAtual !== "") {
        operacaoAtual += operador;
        atualizarTela();
    }
}

function adicionarPonto() {
    operacaoAtual += '.';
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
}

function apagarUltimo() {
    operacaoAtual = operacaoAtual.slice(0, -1);
    atualizarTela();
}

function calcularResultado() {

        resultadoAtual = eval(operacaoAtual);
        document.getElementById('ver-operacao').innerText = operacaoAtual;
        document.getElementById('operacao').innerText = resultadoAtual;
        operacaoAtual = resultadoAtual.toString();
}

function atualizarTela() {
    document.getElementById('operacao').innerText = operacaoAtual;
    document.getElementById('ver-operacao').innerText = "";
}


document.addEventListener("keypress", (e) => {
    if (e.key == "1") {
        adicionarNumero("1");
    }
    else if (e.key == "2") {
        adicionarNumero("2");
    }
    else if (e.key == "3") {
        adicionarNumero("3");
    }
    else if (e.key == "4") {
        adicionarNumero("4");
    }
    else if (e.key == "5") {
        adicionarNumero("5");
    }
    else if (e.key == "6") {
        adicionarNumero("6");
    }
    else if (e.key == "7") {
        adicionarNumero("7");
    }
    else if (e.key == "8") {
        adicionarNumero("8");
    }
    else if (e.key == "9") {
        adicionarNumero("9");
    }
    else if (e.key == "0") {
        adicionarNumero("0");
    }
    else if (e.key == ".") {
        adicionarPonto(".");
    }
    else if (e.key == "Enter") {
        calcularResultado();
    }
    else if (e.key == "Backspace") {
        apagarUltimo();
    }
    else if (e.key == "+") {
        adicionarNumero("+");
    }
    else if (e.key == "-") {
        adicionarNumero("-");
    }
    else if (e.key == "/") {
        adicionarNumero("/");
    }
    else if (e.key == "*") {
        adicionarNumero("*");
    }

})
