export default class ServicoTranferencia{
    #extrato

    constructor(){
        this.#extrato = [];
    }

    transferir(origem, destino, valor){
        if(!origem || !destino || !valor){
           throw new Error('As informações de destino, origem e valor precisam ser preenchidas');
        }else if(valor > 5000){
            this.#extrato.push({
                origem,
                destino,
                valor,
                requerAutorizacao: true
            })
        } else{
            this.#extrato.push({
                origem,
                destino,
                valor
            })
        }
        return 'Transferencia realizada com sucesso'
    }

    get consultarExtrato(){
        return [...this.#extrato];
    }
}
