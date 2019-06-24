const view = require('../front/front');
const inputs = view.ipF;
const outputs = view.oF;


function opcoesControle(resp) {
  switch (resp) {
    case 1: outputs.iFO(); break;
    case 2: outputs.rFO(); break;
    case 3: outputs.bFO(); break;
    case 4: outputs.pFO(percorrerControle(inputs.pFI())); break;
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
    cond = continuarControle(tratamentoContinuar(inputs.continuar()));
  } while (cond);
}


function continuarControle(trata) {
  return (trata == "S") ? true : false;
}

function tratamentoContinuar(continuar) {
  let trata = continuar;
  return trata.toUpperCase();
}