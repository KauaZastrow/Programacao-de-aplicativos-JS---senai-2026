import { Encomenda } from "./encomenda.js";

export class EncomendaConvite extends Encomenda {
    #nomeConvite;

    constructor(descricao, quantidade, nomeConvite) {
        super(descricao, quantidade);
        this.#nomeConvite = nomeConvite;
    }
    get getNomeConvite() { return this.#nomeConvite }

    produzir() { return `${this.getDescricao}, quantidade produzida: ${this.getQuantidade}, convite: ${this.#nomeConvite}`; }
}