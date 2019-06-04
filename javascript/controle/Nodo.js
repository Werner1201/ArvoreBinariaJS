class Nodo {
  constructor(NewValor) {
    this._valor = NewValor;
    this._esq = null;
    this._dir = null;
  }
  //Getters
  get valor() {
    return this._valor;
  }
  get esq() {
    return this._esq;
  }
  get dir() {
    return this._dir;
  }
  //Setters
  set valor(novoValor) {
    this._valor = novoValor;
  }
  set esq(novoEsq) {
    this._esq = novoEsq;
  }
  set dir(novoDir) {
    this._dir = novoDir;
  }
}
