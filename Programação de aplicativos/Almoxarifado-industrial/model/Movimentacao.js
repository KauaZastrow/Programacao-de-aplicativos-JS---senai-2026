export class Movimentacao {

    #numero;
    #quantidade;

    constructor(numero, quantidade) {
        this.#numero = numero;
        this.#quantidade = quantidade;
        this.material = null
    }

    associarMaterial(material) {
        return this.material = material
    }

    get getQuantidade() {
        return this.#quantidade
    }
    get getNumero() {
        return this.#numero
    }

    adicionarUnidades(valor) {
        if (valor > 0) {
            this.#quantidade += valor
            return true
        } else { return false }

    }

    descrever() {
        throw new Error("Faltou implementar metodo na classe filho");
    }
}