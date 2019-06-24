const view = require('./javascript/front/front');
const Nodo = require('./javascript/controle/Nodo');
const inputs = view.ipF;

let no = new Nodo(1);

function main() {
  let resp = inputs.opcoes();
  console.log(resp);
  console.log(typeof resp);
  console.log('Coração');

}

main();


//Carrega o main
//document.addEventListener('DOMContentLoaded', () => main(), false);