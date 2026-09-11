import { Alerta } from "./Alerta.js";

export class AlertaSMS extends Alerta {
  
    #numero;

    constructor(mensagem, prioridade, numero) {
        super(mensagem, prioridade);
        this.#numero = numero;
    }

    get getNumero() {
        return this.#numero;
    }

    enviar() {
        console.log(`Enviando SMS para: ${this.#numero}: ${this.getMensagem} (Prioridade: ${this.getPrioridade})`);
    }
}