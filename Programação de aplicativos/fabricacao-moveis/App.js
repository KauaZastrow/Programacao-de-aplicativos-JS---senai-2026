import { cadastrarFerramenta,
    atualizandoFerramenta,
    deletarFerramenta,
    buscarFerramentaPorId,
    listarFerramentas
} from "./controler/ferramentaControler.js";


cadastrarFerramenta("001", "Martelo")
cadastrarFerramenta("002", "Alicate")

listarFerramentas()

atualizandoFerramenta(1, "002", "Alicate de pressao")

buscarFerramentaPorId(1)

deletarFerramenta(0)

listarFerramentas()