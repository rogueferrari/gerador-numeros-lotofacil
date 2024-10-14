let buttonCount = document.querySelector('.btn-count');
let placeCount = document.querySelector('.place-count');
const countElement = document.querySelector('.count-element');
const numberParHTML = document.querySelector('.number-par');
const numberImparHTML = document.querySelector('.number-impar');
let buttonDelete = document.querySelector('.btn-delete');
const divElements = document.querySelector('.div-elements');
const sequencias = document.querySelector('#sequencias');
const apagarSequenciasBtn = document.querySelector('.apagar-sequencias');

let arrNumber = [];
let numberPar = 0;
let numberImpar = 0;
let arrTest = [];

let sequenciaUm = 0;
let sequenciaDois = 0;
let sequenciaTres = 0;
let sequenciaQuatro = 0;
let sequenciaCinco = 0;

// Função para gerar números
function generateNumbers() {
  arrNumber = []; // Limpa o array antes de gerar novos números
  numberPar = 0; // Reinicia a contagem de pares
  numberImpar = 0; // Reinicia a contagem de ímpares

  while (arrNumber.length < 15) {
    let numberGenerated = Math.floor(Math.random() * 25); // Gera um número aleatório entre 0 e 24

    if (!arrNumber.includes(numberGenerated)) {
      arrNumber.push(numberGenerated); // Adiciona o número ao array
      numberGenerated % 2 === 0 ? numberPar++ : numberImpar++; //verifica se o número é par ou ímpar

      //limpa array, caso já esteja preenchido com 75 números
      if (arrTest.length === 75) {
        arrTest = [];
      }
      if (arrTest.length < 75) {
        arrTest.push(numberGenerated);
      }
    }
  }

  numberParHTML.classList.add('style-par');
  numberImparHTML.classList.add('style-impar');
}

// Função para limpar os dados gerados
function clearNumberGenerated() {
  divElements.innerHTML = ''; // Limpa todos os elementos filhos de divElements
  let informativo = document.createElement('p');
  informativo.innerText = 'Não há números gerados.';
  divElements.appendChild(informativo);
  numberParHTML.innerText = '';
  numberImparHTML.innerText = '';
  numberParHTML.style = 'none';
  numberImparHTML.style = 'none';
  arrNumber = []; // Limpa o array
}

// Função para exibir os números gerados
function handleCount() {
  divElements.innerHTML = ''; // Limpa elementos anteriores antes de exibir os novos
  arrNumber.forEach((number) => {
    let pElement = document.createElement('p');
    pElement.classList.add('element-child');
    pElement.innerText = number;

    //verifica se o número é par e aplica styles
    if (number % 2 === 0) {
      pElement.classList.add('style-par');

      //aplica esses styles caso seja impar
    } else {
      pElement.classList.add('style-impar');
    }

    //adiciona elemento criado nessa div
    divElements.appendChild(pElement);
  });

  //adicionando sequencias
  let primeiraSequencia = arrTest.slice(0, 15).join(' ');
  let segundaSequencia = arrTest.slice(15, 30).join(' ');
  let terceiraSequencia = arrTest.slice(30, 45).join(' ');
  let quartaSequencia = arrTest.slice(45, 60).join(' ');
  let quintaSequencia = arrTest.slice(60, 75).join(' ');

  //adiciona sequências nos respectivos campos
  sequenciaUm = document.querySelector('#sequencia-1');
  sequenciaUm.innerText = primeiraSequencia;

  sequenciaDois = document.querySelector('#sequencia-2');
  sequenciaDois.innerText = segundaSequencia;

  sequenciaTres = document.querySelector('#sequencia-3');
  sequenciaTres.innerText = terceiraSequencia;

  sequenciaQuatro = document.querySelector('#sequencia-4');
  sequenciaQuatro.innerText = quartaSequencia;

  sequenciaCinco = document.querySelector('#sequencia-5');
  sequenciaCinco.innerText = quintaSequencia;

  //adiciona quantidade de numeros impares e pares
  numberParHTML.innerText = numberPar;
  numberImparHTML.innerText = numberImpar;
}

//função para remover sequências
function apagarSequencias() {
  sequenciaUm.innerText = '';
  sequenciaDois.innerText = '';
  sequenciaTres.innerText = '';
  sequenciaQuatro.innerText = '';
  sequenciaCinco.innerText = '';
  arrTest = [];
}

// Adiciona eventos aos botões
buttonCount.addEventListener('click', () => {
  generateNumbers(); // Gera novos números
  handleCount(); // Atualiza a exibição
});

//limpa sequencias
apagarSequenciasBtn.addEventListener('click', apagarSequencias);

//limpa número gerado
buttonDelete.addEventListener('click', clearNumberGenerated);
