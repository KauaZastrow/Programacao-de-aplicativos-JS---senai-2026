export class Pagamento {
    
  #valor;

  constructor(valor) {
    if (new.target === Pagamento) {
      throw new Error("Nao pode criar objeto abstrato");
    }
    this.#valor = valor;
  }

  get getValor() {
    return this.#valor;
  }

  aplicarDesconto(percentual) {
    if (percentual <= 0 || percentual >= 100) {
      return false;
    }
    this.#valor = this.#valor - (this.#valor * percentual) / 100;
    return true;
  }

  processarPag() {
    throw new Error("Faltou implementar metodo na classe filho");
  }
}
