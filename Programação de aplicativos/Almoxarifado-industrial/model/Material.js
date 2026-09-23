export class Material {
    #codigo;
    #nome;

    constructor(codigo, nome) {
        this.#codigo = codigo;
        this.#nome = nome;
    }

    get getCodigo() {
        return this.#codigo;
    }
    get getNome() {
        return this.#nome;
    }
}