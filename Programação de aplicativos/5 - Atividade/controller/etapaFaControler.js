import {EtapaFabricacao} from "../model/Ferramenta.js"
import {cadastrar, listar, atualizar, deletar, buscarPorId} from "../repository/ferramentaRespository.js"

export function cadastrarEtapaFa(codigo, nome){
    const etapaFabricacao = new EtapaFabricacao(codigo, nome)

    cadastrar(etapaFabricacao);

    return "Etapa Fabricacao cadastrada com sucesso"
}

export function listarEtapaFabricacao(){
    const lista = listar();

    console.log(lista);
}

export function atualizarEtapaFabricacao(indice, codigo, nome){
    const etapaFabricacao = new EtapaFabricacao(codigo, nome);

    atualizar(indice, etapaFabricacao)

    return "Etapa Fabricacao atualizada com sucesso"
}

export function deletarEtapaFabricacao(indice){
    deletar(indice);
}

export function buscarEtapaFabricacaoPorId(indice){
    buscarPorId(indice);
}