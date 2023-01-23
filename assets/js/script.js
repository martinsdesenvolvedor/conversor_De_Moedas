function start() {
  var buttonConversor = document.querySelector('#botao');
  buttonConversor.addEventListener('click', conversao);
}

function calculo(numero, conversao) {
  if (conversao == 'Dólar Americano') {
    return numero / 5.24;
  }
  if (conversao == 'Euro') {
    return numero / 5.48;
  }

  if (conversao == 'Libra Esterlina') {
    return numero / 6.36;
  }

  if (conversao == 'Iene') {
    return numero / 5.206;
  }

  if (conversao == 'Dólar Australiano') {
    return numero / 5.206;
  }

  if (conversao == 'Franco Suiço') {
    return numero / 5.54;
  }

  if (conversao == 'Dólar Canadense') {
    return numero / 3.82;
  }

  if (conversao == 'Peso Argentino') {
    return numero * 32.37;
  }

  if (conversao == 'Lira Turca') {
    return numero / 3.58;
  }

  if (conversao == 'Yuan (Renminbi)') {
    return numero / 1.34;
  }
}

function conversao() {
  var inputNumero = document.querySelector('#numero');
  var inputConversao = document.querySelector('#conversao');
  var resultadoConversao = document.querySelector('#resultado');

  var numero = Number(inputNumero.value);
  var conversao = inputConversao.value;

  var result = calculo(numero, conversao);
  resultadoConversao.textContent = result;
}

start();
