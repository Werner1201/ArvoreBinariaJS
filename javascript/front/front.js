/*INPUTS*/

function opcoes() {
  let resp = parseInt(window.prompt("Qual operação você deseja?\n1:Inserção\n2:Remoção\n3:Busca\n4:Percorrer"));
  return resp;
}

function insercaoFrontInput() {
  let num = parseInt(window.prompt("Digite o número a ser inserido:"));
  return num;
}

function remocaoFrontInput() {
  let num = parseInt(window.prompt("Digite o número a ser removido:"));
  return num;
}

function buscaFrontInput() {
  let num = parseInt(window.prompt("Digite o número a ser buscado:"));
  return num;
}

function percorrerFrontInput() {
  let tipo = parseInt(window.prompt("Qual percurso você deseja ?\n1:Pré-Ordem\n2:Pós-Ordem\n3:Ordem Simétrica."));
  return tipo;
}

function continuar() {
  let resp = window.prompt("Deseja realizar outra operação ?<S/N>:");
  return resp;
}


/*OUTPUTS */
function insercaoFrontOutput(retorno) {
  if (retorno == false) {
    console.log("A Inserção fracassou");
  }
  else {
    console.log(`A Inserção de ${retorno} foi bem sucedida!`);
  }
}

function remocaoFrontOutput(retorno) {
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

function buscaFrontOutput(retorno) {
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
function percorrerFrontOutput(retorno) {
  console.log("Resultado do Percurso: ");
  console.log(retorno);
}

