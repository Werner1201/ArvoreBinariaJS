const leia = require('readline-sync');

/*INPUTS*/
leia.setDefaultOptions({ encoding: 'utf8' });
function opcoes() {
  let resp = parseInt(leia.question(console.log("Qual operação você deseja?\n1:Inserção\n2:Remoção\n3:Busca\n4:Percorrer\nDigite: ")));
  return resp;
}

function insercaoFrontInput() {
  let num = parseInt(leia.question(console.log("Digite o número a ser inserido:")));
  return num;
}

function remocaoFrontInput() {
  let num = parseInt(leia.question(console.log("Digite o número a ser removido:")));
  return num;
}

function buscaFrontInput() {
  let num = parseInt(leia.question(console.log("Digite o número a ser buscado:")));
  return num;
}

function percorrerFrontInput() {
  let tipo = parseInt(leia.question(console.log("Qual percurso você deseja ?\n1:Pré-Ordem\n2:Pós-Ordem\n3:Ordem Simétrica.")));
  return tipo;
}

function continuar() {
  let resp = leia.question(console.log("Deseja realizar outra operação ?<S/N>:"));
  return resp;
}

const inputsFront = {
  opcoes: opcoes,
  iFI: insercaoFrontInput,
  rFI: remocaoFrontInput,
  bFI: buscaFrontInput,
  pFI: percorrerFrontInput,
  continuar: continuar
};

/*OUTPUTS */
function insercaoFrontOutput(retornoControle) {
  if (retorno == false) {
    console.log("A Inserção fracassou");
  }
  else {
    console.log(`A Inserção de ${retorno} foi bem sucedida!`);
  }
}

function remocaoFrontOutput(retornoControle) {
  if (retorno === null) {
    console.log("Não há elementos para remover, a Árvore está vazia");
  }
  else if (retorno === false) {
    console.log("Elemento não encontrado");
  }
  else {
    console.log(`A Remoção de ${retorno} foi bem sucedida!`);
  }
}

function buscaFrontOutput(retornoControle) {
  if (retorno === null) {
    console.log("Não há elementos para Buscar, a Árvore está vazia");
  }
  else if (retorno === false) {
    console.log("Elemento não encontrado");
  }
  else {
    console.log(`A Busca de ${retorno} foi bem sucedida!`);
  }
}

//Recebe o array de numeros na ordem de Percurso
//Depois pesquisar maneira de imprimir como no exemplo
function percorrerFrontOutput(retornoControle) {
  console.log("Resultado do Percurso: ");
  console.log(retorno);
}

const outputsFront = {
  iFO: insercaoFrontOutput,
  rFO: remocaoFrontOutput,
  bFO: buscaFrontOutput,
  pFO: percorrerFrontOutput
};

module.exports = { ipF: inputsFront, oF: outputsFront };