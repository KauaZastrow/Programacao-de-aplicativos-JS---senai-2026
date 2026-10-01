export class Ferramenta {
    #codigo;
    #nome;

    constructor(codigo, nome) {
        this.#codigo = codigo;
        this.#nome = nome;
    }

    get codigo() {
        return this.#codigo;
    }

    get nome() {
        return this.#nome;
    }
}