import { EtapaFabricacao } from "./EtapaFabricacao.js";

export class Corte extends EtapaFabricacao {
    #tipoCorte;

    constructor(numero, modeloMovel, unidadesConcluidas, tipoCorte) {
        super(numero, modeloMovel, unidadesConcluidas);
        this.#tipoCorte = tipoCorte;
    }

    get tipoCorte() {
        return this.#tipoCorte;
    }

    descreverEtapa() {
        return `Etapa de Corte - Móvel: ${this.modeloMovel} | Concluídas: ${this.unidadesConcluidas} | Tipo de corte: ${this.#tipoCorte}`;
    }
}