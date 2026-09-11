import { Alerta } from "./Alerta.js";

export class AlertaPainel extends Alerta {

    #painel;

    constructor(mensagem, prioridade, painel) {
        super(mensagem, prioridade);
        this.#painel = painel;
    }

    get getPainel() {
        return this.#painel;
    }

    enviar() {
        console.log(`Alerta enviado para o painel: ${this.#painel}`);
    }
}