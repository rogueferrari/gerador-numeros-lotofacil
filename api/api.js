let concurso = document.querySelector('#concurso');
let dezenasSorteadas = document.querySelector('#dezenas-sorteadas');
let dataConcurso = document.querySelector('#data-concurso');
const premiacoesItens = document.querySelector('#premiacoes-itens');
const divSorteios = document.querySelector('#div-sorteios');

fetch('https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest')
  .then((response) => response.json())
  .then((data) => {
    concurso.innerHTML = data.concurso;
    dezenasSorteadas.innerHTML = data.dezenas.join(' ');
    dataConcurso.innerHTML = data.data;

    //adiciona localidades dos ganhadores
    for (let i = 0; i < data.localGanhadores.length; i++) {
      let municipioGanhador = document.createElement('p');
      let estadoGanhador = document.createElement('span');
      municipioGanhador.innerHTML = `Localidade 15 acertos: ${data.localGanhadores[i].municipio} `;
      estadoGanhador.innerHTML = `/ ${data.localGanhadores[i].uf}`;
      divSorteios.append(municipioGanhador);
      municipioGanhador.append(estadoGanhador);
    }

    //criacão e inserção do resultado direto no HTML
    for (let i = 0; i < data.premiacoes.length; i++) {
      //adiciona quantidade de acertos
      let liDescricao = document.createElement('li');
      let divContainerElementos = document.createElement('div');
      divContainerElementos.classList.add('div-premiacoes');
      let pDivElementos = document.createElement('p');
      pDivElementos.innerHTML = `Acertos: ${data.premiacoes[i].descricao}`;
      liDescricao.appendChild(divContainerElementos);
      divContainerElementos.appendChild(pDivElementos);
      premiacoesItens.appendChild(liDescricao);

      //adiciona quantidade de ganhadores
      let liGanhadores = document.createElement('li');
      let pGanhadores = document.createElement('p');
      pGanhadores.innerHTML = `Ganhadores: ${data.premiacoes[i].ganhadores}`;
      divContainerElementos.appendChild(pGanhadores);
      premiacoesItens.appendChild(liGanhadores);

      //adiciona valor do premio
      let liValorPremio = document.createElement('li');
      let pValorPremio = document.createElement('p');
      divContainerElementos.appendChild(pValorPremio);
      pValorPremio.innerHTML = `Valor do prêmio: ${data.premiacoes[
        i
      ].valorPremio.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })}`;

      premiacoesItens.appendChild(liValorPremio);

      console.log('premiações ', data.premiacoes[i]);
    }

    console.log(data);
  });
