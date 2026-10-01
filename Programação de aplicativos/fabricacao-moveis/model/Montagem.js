import { EtapaFabricacao } from "./EtapaFabricacao.js";

export class Montagem extends EtapaFabricacao {
    #tipoUniao;

    constructor(numero, modeloMovel, unidadesConcluidas, tipoUniao) {
        super(numero, modeloMovel, unidadesConcluidas);
        this.#tipoUniao = tipoUniao;
    }

    get tipoUniao() {
        return this.#tipoUniao;
    }

    descreverEtapa() {
        return `Etapa de Montagem - Móvel: ${this.modeloMovel} | Concluídas: ${this.unidadesConcluidas} | Tipo de união: ${this.#tipoUniao}`;
    }
}