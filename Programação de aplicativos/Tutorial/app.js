import {PagamentoCartao} from "./Model/PagamentoCartao.js";
import {PagamentoPix} from "./Model/PagamentoPix.js";
import {PagamentoBoleto} from "./Model/PagamentoBoleto.js";
import {Pagamento} from "./Model/Pagamento.js";

const pix = new PagamentoPix(1000, "kk");
const cartao = new PagamentoCartao(500, 3244, 2);
const boleto = new PagamentoBoleto(250, "12345678900")

pix.aplicarDesconto(10);

const pagamentos = [pix, cartao, boleto]

console.log("Pagamentos criados");

for(let i = 0; i < pagamentos.length; i++){
    const pagamento = pagamentos[i];
    pagamentos[i].processarPag();

    if(pagamento instanceof PagamentoCartao || pagamento instanceof PagamentoBoleto){
        console.log(`Valor: ${pagamento.getValor}`);
    }
}

console.log("Pagamentos processados");