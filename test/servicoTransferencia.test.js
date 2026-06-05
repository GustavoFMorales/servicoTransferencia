import ServicoTranferencia from "../src/servicoTransferencia.js";
import assert from "node:assert";

describe("Servico de Transferencia", () => {
  let servicoTransferencia;
  beforeEach(() => {
    servicoTransferencia = new ServicoTranferencia();
  });
  it("Deve validar a mensagem de erro quando a informação de origem não for preenchida", () => {
    const mensagemDeErro =
      "As informações de destino, origem e valor precisam ser preenchidas";

    assert.throws(
      () => {
        servicoTransferencia.transferir();
      },
      {
        message: mensagemDeErro,
      },
    );
  });
  it("Deve validar mensagem de erro quando a informação de destino não for preenchida", () => {
    const mensagemDeErro =
      "As informações de destino, origem e valor precisam ser preenchidas";

    assert.throws(
      () => {
        servicoTransferencia.transferir("Gustavo", "", 500);
      },
      {
        message: mensagemDeErro,
      },
    );
  });
  it("Deve validar mensagem de erro quando a informação do valor não for preenchida", () => {
    const mensagemDeErro =
      "As informações de destino, origem e valor precisam ser preenchidas";

    assert.throws(
      () => {
        servicoTransferencia.transferir("Gustavo", "Paola");
      },
      {
        message: mensagemDeErro,
      },
    );
  });
  it("Deve validar se a transferencia foi realizada com sucesso", () => {
     const transferir = servicoTransferencia.transferir('Gustavo', 'Paola', 500);
     const mensagemSucesso = 'Transferencia realizada com sucesso';

     assert.equal(transferir,mensagemSucesso);
  });
  it('Deve validar as informações do extrato', () =>{
    servicoTransferencia.transferir('Gustavo', 'Paola', 500);
    assert.deepEqual(servicoTransferencia.consultarExtrato[0], { origem: 'Gustavo', destino: 'Paola', valor: 500 });
  });
  it('Deve validar se o valor da transferencia for maior que 5000 a informção requerAutorizacao é apresentada', () => {
    servicoTransferencia.transferir('Gustavo', 'Paola', 5000.01);
    assert.deepEqual(servicoTransferencia.consultarExtrato[0], { origem: 'Gustavo', destino: 'Paola', valor: 5000.01, requerAutorizacao:true});
  })
});
