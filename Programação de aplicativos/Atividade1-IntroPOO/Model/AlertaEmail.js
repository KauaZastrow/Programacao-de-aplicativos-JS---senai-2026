import { Alerta } from "./Alerta.js";

export class AlertaEmail extends Alerta {

    #email;

    constructor(mensagem, prioridade, email) {
        super(mensagem, prioridade);
        this.#email = email;
    }

    get getEmail() {
        return this.#email;
    }

    enviar() {
        console.log(`Email enviado para: ${this.#email}`);
    }
}