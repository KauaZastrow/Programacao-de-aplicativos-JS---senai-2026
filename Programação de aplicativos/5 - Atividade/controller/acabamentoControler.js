import { Acabamento } from "../model/Acabamento.js"
import { cadastrar, listar, atualizar, deletar, buscarPorId } from "../repository/etapaFabRepository.js"

export function cadastrarAcabamento(codigo, nome, numero, modeloMovel, unidadesConcluidas, tipoAcabamento) {
    const acabamento = new Acabamento(codigo, nome, numero, modeloMovel, unidadesConcluidas, tipoAcabamento)

    cadastrar(acabamento);

    return "Acabamento cadastrada com sucesso"
}

export function listarAcabamento() {
    const lista = listar();

    console.log(lista);
}

export function atualizarAcabamento(indice, codigo, nome, numero, modeloMovel, unidadesConcluidas, tipoAcabamento) {
    const acabamento = new Acabamento(codigo, nome, numero, modeloMovel, unidadesConcluidas, tipoAcabamento);

    atualizar(indice, corte)

    return "Acabamento atualizada com sucesso"
}

export function deletarAcabamento(indice) {
    deletar(indice);
}

export function buscarAcabamento(indice) {
    buscarPorId(indice);
}