import { EtapaFabricacao } from "./EtapaFabricacao.js";

export class Acabamento extends EtapaFabricacao {
    #tipoAcabamento;

    constructor(numero, modeloMovel, unidadesConcluidas, tipoAcabamento) {
        super(numero, modeloMovel, unidadesConcluidas);
        this.#tipoAcabamento = tipoAcabamento;
    }

    get tipoAcabamento() {
        return this.#tipoAcabamento;
    }

    descreverEtapa() {
        return `Etapa de Acabamento - Móvel: ${this.modeloMovel} | Concluídas: ${this.unidadesConcluidas} | Tipo de acabamento: ${this.#tipoAcabamento}`;
    }
}