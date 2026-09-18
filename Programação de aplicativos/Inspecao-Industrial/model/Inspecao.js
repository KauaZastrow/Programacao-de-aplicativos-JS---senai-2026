export class Inspecao {
    #codigo
    #lote
    #quantidadeVerificada
    #inspetor

    constructor(codigo, lote, quantidadeVerificada, inspetor) {
        this.#codigo = codigo;
        this.#lote = lote;
        this.#quantidadeVerificada = quantidadeVerificada;
        this.#inspetor = inspetor;
    }

    get getCodigo() {
        return this.#codigo;
    }

    get getLote() {
        return this.#lote;
    }

    get getQuantidadeVerificada() {
        return this.#quantidadeVerificada;
    }

    get getInspetor() {
        return this.#inspetor;
    }

    adicionarPecas(quantidade) {
        if(quantidade > 0) {
            this.#quantidadeVerificada += quantidade;
            return true;
        }
        return false;
    }
    
    descreverVerificacao() {
        throw new Error('o método deve ser implementado na classe filha');
    }

    atribuirInspetor(inspetor) {
        this.#inspetor = inspetor;
    }
}