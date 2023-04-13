const form = document.getElementById('formAtividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Comemorando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Triste"/>';
const atividades = [];
const notas = [];
const spamAprovado = '<span class="resultado aprovado">Aprovado!</span>'
const spamReprovado = '<span class="resultado reprovado">Reprovado!</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima: "));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert (`A atividade ${inputNomeAtividade.value} já foi inserida anteriormente`)
    } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value>=notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
}
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal (){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('mediaFinalValor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spamAprovado : spamReprovado;
}

function calculaMediaFinal (){
    let somaNotas = 0;
    for (let i = 0; i < notas.length; i ++){
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;

}