import { Movimentacao } from "./Movimentacao.js"

export class Entrada extends Movimentacao {
    #fornecedor;

    constructor(numero, quantidade, fornecedor) {
        super(numero, quantidade)
        this.#fornecedor = fornecedor
    }

    get getFornecedor() {
        return this.#fornecedor
    }

    descrever() {
        console.log(`
            Operacao: Entrada.
            Numero: ${this.getNumero}.
            Quantidade: ${this.getQuantidade}.
            Fornecedor: ${this.#fornecedor}.`)
    }
}