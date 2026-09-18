import { Inspecao } from "./Inspecao.js";

export class InspecaoFuncional extends Inspecao {
    #funcaoTestada

    constructor(codigo, lote, quantidadeVerificada, funcaoTestada, inspetor) {
        super(codigo, lote, quantidadeVerificada, inspetor);
        this.#funcaoTestada = funcaoTestada;
    }

    get getFuncaoTestada() {
        return this.#funcaoTestada;
    }

    descreverVerificacao() {
        console.log(`Inspeção funcional do lote ${this.getLote} com código ${this.getCodigo}: ${this.getQuantidadeVerificada} peças verificadas, função testada: ${this.getFuncaoTestada}.Inspetor responsável: ${this.getInspetor.nome}, matrícula: ${this.getInspetor.getMatricula}`);
    }
}