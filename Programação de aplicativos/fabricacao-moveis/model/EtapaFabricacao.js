export class EtapaFabricacao {
    #numero;
    #modeloMovel;
    #unidadesConcluidas;
    #ferramentas;

    constructor(numero, modeloMovel, unidadesConcluidas) {
        this.#numero = numero;
        this.#modeloMovel = modeloMovel;
        this.#unidadesConcluidas = unidadesConcluidas;
        this.#ferramentas = [];
    }

    get numero() {
        return this.#numero;
    }

    get modeloMovel() {
        return this.#modeloMovel;
    }

    get unidadesConcluidas() {
        return this.#unidadesConcluidas;
    }

    get ferramentas() {
        return this.#ferramentas;
    }

    adicionarFerramenta(ferramenta) {
        this.#ferramentas.push(ferramenta);
    }

    adicionarUnidades(valor) {
        if (valor > 0) {
            this.#unidadesConcluidas += valor;
            return true;
        }
        return false;
    }

    descreverEtapa() {
        throw new Error("O método descreverEtapa() deve ser implementado pelas classes filhas.");
    }
}