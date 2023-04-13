<h1 align="center">
  <a href="https://felipe-projeto-calculadora-medias-two.vercel.app"><p align="center">Calculadora de Médias - Aprova || Reprova</p></a>
 <img src="https://media.giphy.com/media/ne3xrYlWtQFtC/giphy.gif" alt="Homem fazendo calculos complexos">
</h1>
<div style="display: inline_block"><br>
  <div align="center">
  <img align="center" alt="fde95-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="fde95-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="fde95-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
</div>

<h3> Sobre o Projeto </h3>
<p>No oitavo módulo do curso de Engenheiro Front End oferecido pela EBAC, tivemos como exercício de fixação a criação de uma nova página utilizando HTML, CSS e JavaScript. 
O exercício proposto é de criar uma calculadora de médias finais dando a liberdade ao usuário de inserir a média exigida por sua instituição (o que sabemos que é variável), a inclusão de um trabalho e sua nota, para seja exibido ao final a aprovação ou reprovação daquele exercício em questão por meio de um Emoji e o resultado final com a aprovação ou reprovação por meio de uma mensagem.
Para este projeto desenvolvi o corpo da página com HTML, o design com CSS e as ações em JavaScript.
E ao final, disponibilizei o resultado através do Vercel, confira o resultado.

<h2>Acesse aqui: <a href="https://felipe-projeto-calculadora-medias-two.vercel.app"><b> Aprova||Reprova </b></a></h2>

<br></br>
<h3>Pré Visualização</h3>

<img width="600" src="https://user-images.githubusercontent.com/123211425/231803530-7fda9480-acc9-4f13-8702-15af11e2d31a.png">


<h4>Primeiro Acesso - Adicione a média necessária para aprovação</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/231804461-a6ca30a0-765d-4367-a988-254563c696c1.png">

<h4>Adicionando Informações - Emojis e mensagem</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/231805215-5528809f-198d-4d1a-b77f-3e60c0982f56.png">

<h4>Duplicidade de Informações - Mensagem de alerta</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/231805482-ea738878-7291-464e-a0ac-e72a6cceba4b.png">


<br></br>

<h3>Contatos</h3>
<div style="display: inline_block">
 <a href="https://instagram.com/fde.95" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 <a href = "mailto:fdespinoza95@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
 <a href="https://www.linkedin.com/in/fde95" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>

<br></br>

<h3>Código Completo</h3>

<h4>HTML</h4>

```xml
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <title>Aprova||Reprova</title>
</head>
<body>
    <div class="container">
        <header>
            <img src="./images/logo.png" alt="Logo Aprova ou Reprova (desc.: Capelo com diploma)"/>
            <h1>Calculadora de Médias</h1>
        </header>
        <form id="formAtividade">
            <input type="text" id="nomeAtividade" required placeholder="Nome da Atividade" />
            <input type="number" id="notaAtividade" required placeholder="Nota da Atividade" min="0" max="10"/>
            <button type="submit">Adicionar +</button>
        </form>
        <table cellspacing="0" >
            <thead>
                <tr>
                    <th>
                        Nome da Atividade
                    </th>
                    <th>
                        Nota da Atividade
                    </th>
                    <th>
                        Resultado
                    </th>
                </tr>
            </thead>
            <tbody>
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        <b>Média Final</b>
                    </td>
                    <td id="mediaFinalValor">
                        ---
                    </td>
                    <td id="mediaFinalResultado">
                        ---
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
    <script src="./main.js"></script>
</body>
</html>
```
<h4>CSS</h4>

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    padding-top: 100px;
    background-color:#E7E7E7 ;
}

header{
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}

header img{
    height: 36px;
    margin-right: 16px;
}

header h1{
    font-size: 40px;
    font-weight: bold;
}

.container{
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
}

form{
    display: flex;
    max-width: 640px;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 56px;
}

form input{
    font-size: 24px;
    background-color: #fff;
    border: none;
    border-bottom: 2px solid #000;
    padding: 8px;
}

form button{
    background-color:#009432 ;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-bottom: 2px solid #000;
}

form button:hover{
    background-color:#0bbb46 ;
    border-bottom: none;
}

table {
    width: 100%;
}

table th{
    border-bottom: 2px solid #000;
    padding: 16px;
    font-size: 24px;
    font-weight: bold;
}

table td{
    text-align: center;
    font-size: 18px;
    padding: 16px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}

table td img{
    height: 30px;
}

.resultado{
    padding: 8px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    border-radius: 3px;
}

.aprovado{
    background-color: #009432;
}

.reprovado{
    background-color: red;
}
```

<h4>JavaScript</h4>

```js
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
```
