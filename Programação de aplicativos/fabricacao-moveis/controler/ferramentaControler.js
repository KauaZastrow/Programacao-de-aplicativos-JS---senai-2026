import { Ferramenta } from "../model/Ferramenta.js";
import { atualizar, buscarPorId, cadastrar, deletar, listar } from "../repository/ferramentaRepository.js";

export function cadastrarFerramenta(codigo, nome) {
    const ferramenta = new Ferramenta(codigo, nome)

    cadastrar(ferramenta)
    return "cadastrado com sucesso"
}

export function listarFerramentas() {
    const lista = listar()
    console.log(lista)
}

export function atualizandoFerramenta(indice, codigo, nome) {
    const ferramenta = new Ferramenta(codigo, nome)

    atualizar(indice, ferramenta)
    return "ferramenta com sucesso"
}

export function deletarFerramenta(indice) {
    deletar(indice)
}

export function buscarFerramentaPorId(indice) {
    buscarPorId(indice)
}