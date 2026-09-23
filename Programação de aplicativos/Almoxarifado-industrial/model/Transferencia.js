import { Movimentacao } from "./Movimentacao.js";

export class Transferencia extends Movimentacao {
    #almoxarifadoDestino;

    constructor(numero, quantidade, almoxarifadoDestino) {
        super(numero, quantidade)
        this.#almoxarifadoDestino = almoxarifadoDestino;
    }
    get getAlmoxarifadoDestino() {
        return this.#almoxarifadoDestino;
    }

    descrever() {
        console.log(`
            Operacao: Transferencia.
            Numero: ${this.getNumero}.
            Quantidade: ${this.getQuantidade}.
            Almoxarifado de destino: ${this.#almoxarifadoDestino}.`)
    }
}