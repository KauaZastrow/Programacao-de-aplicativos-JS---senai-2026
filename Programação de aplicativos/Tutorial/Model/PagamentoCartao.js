import { Pagamento } from "./Pagamento.js";

export class PagamentoCartao extends Pagamento{

    #ultimoNum;
    #parcelas
    constructor(valor, ultimoNum, parcelas){
        super(valor),
        this.#ultimoNum = ultimoNum,
        this.#parcelas = parcelas
    }

    get ultimoNum(){
        return this.#ultimoNum
    }

    get parcelas(){
        return this.#parcelas
    }

    processarPag(){
        console.log(`Enviar dados do cartao para a operadora ${this.#ultimoNum} e as parcelas ${this.#parcelas}`)
    }
}