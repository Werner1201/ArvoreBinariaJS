class Arvore {
  constructor() {
    this._raiz = null;
  }
  get raiz() {
    return this._raiz;
  }
  set raiz(nvRaiz) {
    return this._raiz = nvRaiz;
  }

  //Vazio ?
  vazio() { return (this.raiz == null) ? true : false; }

  //Inserção
  insere(num, nodoRaiz) {
    //Se a raiz atual for maior que o numero a ser inserido
    if (nodoRaiz.valor > num) {
      //Entao se o valor a esquerda da raiz atual for diferente de null
      if (nodoRaiz.esq != null) {
        //Chama-se de novo o metodo para levar para uma raiz mais profunda
        this.insere(num, nodoRaiz.esq);
      } //Se a esquerda da raiz atual for nula 
      else {
        //Cria-se o noh na hora e insere na arvore
        let no = new Nodo(num);
        nodoRaiz.esq = no;
        return num;
      }
    }//Se a raiz atual nao for maior que o numero a ser inserido
    else {
      //Entao se o valor a direita da raiz atual for diferente de null
      if (nodoRaiz.dir != null) {
        //Chama-se de novo o metodo para levar para uma raiz mais profunda
        this.insere(num, nodoRaiz.dir);
      } // Se a direita da raiz atual for null
      else {
        //Cria-se o noh na hora e insere na arvore
        let no = new Nodo(num);
        nodoRaiz.dir = no;
        return num;
      }
    }
    return false;
  }
}