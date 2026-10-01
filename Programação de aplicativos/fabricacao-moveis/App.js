import { Ferramenta } from "./model/Ferramenta.js";
import { Corte } from "./model/Corte.js";
import { Montagem } from "./model/Montagem.js";
import { Acabamento } from "./model/Acabamento.js";

const trena = new Ferramenta(1, "Trena");
const serra = new Ferramenta(2, "Serra Circular");
const parafusadeira = new Ferramenta(3, "Parafusadeira");
const lixadeira = new Ferramenta(4, "Lixadeira Orbital");

const etapaCorte = new Corte(101, "Mesa de Jantar", 10, "Corte reto");
const etapaMontagem = new Montagem(102, "Mesa de Jantar", 8, "Parafusos");
const etapaAcabamento = new Acabamento(103, "Mesa de Jantar", 5, "Verniz");

etapaCorte.adicionarFerramenta(trena);
etapaCorte.adicionarFerramenta(serra);

etapaMontagem.adicionarFerramenta(trena);
etapaMontagem.adicionarFerramenta(parafusadeira);

etapaAcabamento.adicionarFerramenta(lixadeira);

console.log("Unidades iniciais do corte:", etapaCorte.unidadesConcluidas);

const testePositivo = etapaCorte.adicionarUnidades(5);
console.log("Adicionando 5 -> Retorno:", testePositivo, "| Total:", etapaCorte.unidadesConcluidas);

const testeZero = etapaCorte.adicionarUnidades(0);
console.log("Adicionando 0 -> Retorno:", testeZero, "| Total:", etapaCorte.unidadesConcluidas);

console.log("\n--- Etapas de Fabricação ---");

const etapas = [etapaCorte, etapaMontagem, etapaAcabamento];


for (let i = 0; i < etapas.length; i++) {
    const etapa = etapas[i];
    console.log("Número:", etapa.numero);
    console.log("Descrição:", etapa.descreverEtapa());

    const nomesFerramentas = [];
    for (let j = 0; j < etapa.ferramentas.length; j++) {
        nomesFerramentas.push(etapa.ferramentas[j].nome);
    }
    console.log("Ferramentas usadas:", nomesFerramentas.join(", "));
    console.log("----------------------------");
}