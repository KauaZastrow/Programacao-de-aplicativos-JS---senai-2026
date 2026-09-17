export class Encomenda {
    #descricao;
    #quantidade;

    constructor(descricao, quantidade) {
        this.#descricao = descricao;
        this.#quantidade = quantidade;
    }

    get getDescricao() { return this.#descricao }
    get getQuantidade() { return this.#quantidade }

    adicionarUnidades(unidades) {
        if (unidades > 0) {
            this.#quantidade += unidades
            return true;
        }
        return false;
    }

    produzir() { throw new Error(`Esse metodo deve ser implementado pelas classes filhas!`); }
}