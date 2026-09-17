import { Encomenda } from "./encomenda.js";

export class EncomendaEtiqueta extends Encomenda {
    #nomeProduto;
    constructor(descricao, quantidade, nomeProduto) {
        super(descricao, quantidade);
        this.#nomeProduto = nomeProduto;
    }
    get getNomeProduto() { return this.#nomeProduto }

    produzir() { return `Nome: ${this.#nomeProduto}, produzidas ${this.getQuantidade}, Descricao: ${this.getDescricao}`; }
}