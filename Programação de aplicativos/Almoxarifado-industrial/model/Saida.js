import { Movimentacao } from "./Movimentacao.js";

export class Saida extends Movimentacao {
    #setorDestino;

    constructor(numero, quantidade, setorDestino) {
        super(numero, quantidade)
        this.#setorDestino = setorDestino;
    }
    get getSetorDestino() {
        return this.#setorDestino;
    }

    descrever() {
        console.log(`
            Operacao: Saida.
            Numero: ${this.getNumero}.
            Quantidade: ${this.getQuantidade}.
            Setor de destino: ${this.#setorDestino}.`)
    }
}