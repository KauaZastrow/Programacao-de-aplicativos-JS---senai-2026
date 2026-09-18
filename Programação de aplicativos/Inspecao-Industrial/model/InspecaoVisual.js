import { Inspecao } from "./Inspecao.js";

export class InspecaoVisual extends Inspecao {
    #aspectoObservado

    constructor(codigo, lote, quantidadeVerificada, aspectoObservado, inspetor) {
        super(codigo, lote, quantidadeVerificada, inspetor);
        this.#aspectoObservado = aspectoObservado; 
    }

    get getAspectoObservado() {
        return this.#aspectoObservado;
    }

    descreverVerificacao() {
        console.log(`Inspeção visual do lote ${this.getLote} com código ${this.getCodigo}: ${this.getQuantidadeVerificada} peças verificadas, aspecto observado: ${this.getAspectoObservado}.Inspetor responsável: ${this.getInspetor.nome}, matrícula: ${this.getInspetor.getMatricula}`);
    }
}