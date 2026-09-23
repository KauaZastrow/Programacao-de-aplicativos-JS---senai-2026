import { Entrada } from "./model/Entrada.js";
import { Saida } from "./model/Saida.js";
import { Transferencia } from "./model/Transferencia.js";
import { Material } from "./model/Material.js";

const entrada = new Entrada(1, 21, "daniel_ramos-lopes");
const saida = new Saida(1, 21, "Uranio City");
const transferencia = new Transferencia(1, 21, "Almoxarifado 23");
/*const materialA = new Material(111, "caixa 1")
const materialB = new Material(112, "caixa 2")


const materialArray = [materialA, materialB]
console.log(`Materiais`)
for (let i = 0; i < materialArray.length; i++) {
    console.log(`${materialArray[i].codigo}, ${materialArray[i].nome}`.)
}*/

const movimentacoes = [entrada, saida, transferencia];
console.log("Movimentacoes feitas:");
for (let i = 0; i < movimentacoes.length; i++) {
    const movimento = movimentacoes[i];
    movimentacoes[i].descrever();
}
console.log("Movimentacoes feitas");