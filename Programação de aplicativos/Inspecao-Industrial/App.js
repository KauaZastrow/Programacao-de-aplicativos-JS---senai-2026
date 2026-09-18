import {InspecaoVisual} from "./model/InspecaoVisual.js";
import {InspecaoDimensional} from "./model/InspecaoDimensional.js";
import {InspecaoFuncional} from "./model/InspecaoFuncional.js";
import {Inspetor} from "./model/Inspetor.js";


const inspetor = new Inspetor("João", "123456789");

const visual = new InspecaoVisual(
    "AS23SIA",
    10,
    15,
    "Acabamento dos peças",
    inspetor
);

const dimensional = new InspecaoDimensional(
    "LASO402",
    5,
    60,
    "Tolerância exigida atingida",
    inspetor
);

const funcional = new InspecaoFuncional(
    "FNC001T",
    3,
    32,
    "Encaixe das peças",
    inspetor
);

visual.atribuirInspetor(inspetor);
dimensional.atribuirInspetor(inspetor);

visual.adicionarPecas(5);

const inspecoes = [visual, dimensional, funcional];

for (let i = 0; i < inspecoes.length; i++) {
    const inspecao = inspecoes[i];
    inspecao.descreverVerificacao(); 
}