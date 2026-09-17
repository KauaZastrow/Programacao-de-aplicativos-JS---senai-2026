import { EncomendaCartas } from './model/encomendaCartas.js';
import { EncomendaConvite } from './model/encomendaConvite.js';
import { EncomendaEtiqueta } from './model/encomendaEtiqueta.js';

const cartas = new EncomendaCartas(
    'Cartazes em producao',
    20,
    5.5

)

const convite = new EncomendaConvite(
    'Enviados',
    50,
    'Ariba'
)

const etiqueta = new EncomendaEtiqueta(
    'Etiquetas etiquetadas',
    100,
    'Etiqueta'
)

cartas.adicionarUnidades(50)
console.log(`${cartas.getQuantidade}`)
cartas.adicionarUnidades(0)
console.log(`${cartas.getQuantidade}`)

const arrayEncomendas = [cartas, convite, etiqueta]

for (let i = 0; i < arrayEncomendas.length; i++) {
    console.log(`${arrayEncomendas[i].produzir()}`)
    console.log(``)
}