export class Alerta {

  #mensagem;
  #prioridade;

  constructor(mensagem, prioridade) {
    if (new.target === Alerta) {
      throw new Error("Esta classe não pode ser instanciada diretamente");
    }

    this.#mensagem = mensagem;
    this.#prioridade = prioridade;
  }

  get getMensagem() {
    return this.#mensagem;
  }
  get getPrioridade() {
    return this.#prioridade;
  }

  alterarPrioridade(novaPrioridade) {
    if (
      novaPrioridade != "Baixa" &&
      novaPrioridade != "Média" &&
      novaPrioridade != "Alta"
    ) {
      return false;
    } else {
      this.#prioridade = novaPrioridade;
      return true;
    }
  }

  enviar() {
    throw new Error("Faltou implementar metodo na classe filho");
  }
}
