export class Inspetor {
    #matricula;
    constructor(nome, matricula) {
        this.nome = nome;
        this.#matricula = matricula;
    }

    get getMatricula() {
        return this.#matricula;
    }
}