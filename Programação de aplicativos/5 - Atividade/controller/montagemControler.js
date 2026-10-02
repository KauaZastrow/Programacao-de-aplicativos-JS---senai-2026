import { Montagem } from "../model/Montagem.js"
import { cadastrar, listar, atualizar, deletar, buscarPorId } from "../repository/etapaFabRepository.js"

export function cadastrarMontagem(codigo, nome, numero, modeloMovel, unidadesConcluidas, tipoUniao) {
    const montagem = new Montagem(codigo, nome, numero, modeloMovel, unidadesConcluidas, tipoUniao)

    cadastrar(montagem);

    return "Montagem cadastrada com sucesso"
}

export function listarMontagem() {
    const lista = listar();

    console.log(lista);
}

export function atualizarMontagem(indice, codigo, nome, numero, modeloMovel, unidadesConcluidas, tipoUniao) {
    const montagem = new Montagem(codigo, nome, numero, modeloMovel, unidadesConcluidas, tipoUniao);

    atualizar(indice, corte)

    return "Montagem atualizada com sucesso"
}

export function deletarMontagem(indice) {
    deletar(indice);
}

export function buscarMontagem(indice) {
    buscarPorId(indice);
}