import {Corte} from "../model/Corte.js"
import {cadastrar, listar, atualizar, deletar, buscarPorId} from "../repository/etapaFabRepository.js"

export function cadastrarCorte(codigo, nome, numero, modeloMovel, unidadesConcluidas, tipoCorte){
    const corte = new Corte(codigo, nome, numero, modeloMovel, unidadesConcluidas, tipoCorte)

    cadastrar(corte);

    return "Corte cadastrada com sucesso"
}

export function listarCorte(){
    const lista = listar();

    console.log(lista);
}

export function atualizarCorte(indice, codigo, nome, numero, modeloMovel, unidadesConcluidas, tipoCorte){
    const corte = new Corte(codigo, nome, numero, modeloMovel, unidadesConcluidas, tipoCorte);

    atualizar(indice, corte)

    return "Corte atualizada com sucesso"
}

export function deletarCorte(indice){
    deletar(indice);
}

export function buscarCorte(indice){
    buscarPorId(indice);
}