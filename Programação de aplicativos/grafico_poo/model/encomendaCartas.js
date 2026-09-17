import { Encomenda } from "./encomenda.js";

export class EncomendaCartas extends Encomenda {

    #tamanho;

    constructor(descricao, quantidade, tamanho) {
        super(descricao, quantidade);
        this.#tamanho = tamanho;
    }

    get getTamanho() { return this.#tamanho }

    produzir() {
        return `Quantidade de Cartazes produzidos: ${this.getQuantidade}, tamanho escolhido para producao: ${this.#tamanho}, Descricao: ${this.getDescricao}`;
    }
}