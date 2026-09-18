import { Inspecao } from "./Inspecao.js";

export class InspecaoDimensional extends Inspecao {
    #medidaConferida

    constructor(codigo, lote, quantidadeVerificada, medidaConferida, inspetor) {
        super(codigo, lote, quantidadeVerificada, inspetor);
        this.#medidaConferida = medidaConferida;
    }

    get getMedidaConferida() {
        return this.#medidaConferida;
    }

    descreverVerificacao() {
        console.log(`Inspeção dimensional do lote ${this.getLote} com código ${this.getCodigo}: ${this.getQuantidadeVerificada} peças verificadas, medida conferida: ${this.getMedidaConferida}. Inspetor responsável: ${this.getInspetor.nome}, matrícula: ${this.getInspetor.getMatricula}`);
    }
}