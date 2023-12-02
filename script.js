let operacaoAtual = '';
let resultadoAtual = '';

function atualizarTela() {
    document.getElementById('ver-operacao').innerText = operacaoAtual;
    document.getElementById('operacao').innerText = resultadoAtual;
}

function adicionarNumero(numero) {
    operacaoAtual += numero;
    atualizarTela();
}

function adicionarConta(operador) {
    if (operacaoAtual !== '*' && operacaoAtual !== '+' && operacaoAtual !== '/') {
        operacaoAtual += operador;
        atualizarTela();
    }
}

function adicionarPonto() {
    operacaoAtual += '.';
    atualizarTela();
}

function apagarNumeroErrado() {
    operacaoAtual = '';
    atualizarTela();
}

function apagarTudo() {
    operacaoAtual = '';
    resultadoAtual = '';
    atualizarTela();
}

function apagarUltimo() {
    operacaoAtual = operacaoAtual.slice(0, -1);
    atualizarTela();
}

function calcularResultado() {
    
        resultadoAtual = eval(operacaoAtual);
        operacaoAtual = resultadoAtual.toString();
        atualizarTela();

}

