const etapaFabricacoes = [];


export function cadastrar(EtapaFabricacao) {
    etapaFabricacoes.push(EtapaFabricacao);
}

export function listar() {
    return etapaFabricacoes;
}

export function atualizar(indice, EtapaFabricacao) {
    etapaFabricacoes[indice] = EtapaFabricacao;
}

export function deletar(indice) {
    etapaFabricacoes.splice(indice, 1);
}

export function buscarPorId(indice) {
    return etapaFabricacoes[indice];
}