function opcoesControle(resp) {
  switch (resp) {
    case 1: insercaoFrontOutput(); break;
    case 2: remocaoFrontOutput(); break;
    case 3: buscaFrontOutput(); break;
    case 4: percorrerFrontOutput(percorrerControle(percorrerFrontInput())); break;
  }
}

function percorrerControle(tipo) {
  switch (tipo) {
    case 1: break;
    case 2: break;
    case 3: break;
  }
}


function controlePrograma(PrimeiraFuncaoControle, PrimeiraFuncaoFront) {
  let cond = true;
  do {
    PrimeiraFuncaoControle(PrimeiraFuncaoFront());
    cond = continuarControle(tratamentoContinuar(continuar()));
  } while (cond);
}


function continuarControle(trata) {
  return (trata == "S") ? true : false;
}

function tratamentoContinuar(continuar) {
  let trata = continuar.substring(0, 1);
  return trata.toUpperCase();
}