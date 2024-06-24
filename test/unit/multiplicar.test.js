const Servico = require("../../src/services/service");

describe("Função Multiplicar", () => {
  let servico = new Servico();

  it("Multiplicação de 10x10 resultado será: 100", () => {
    const resultado = servico.Multiplicar(10, 10);
    expect(resultado).toBe(100);
  });

  it("Multiplicação de 0x10 resultado será: 0", () => {
    const resultado = servico.Multiplicar(0, 10);
    expect(resultado).toBe(0);
  });

  it("Multiplicação de -5x5 resultado será: -25", () => {
    const resultado = servico.Multiplicar(-5, 5);
    expect(resultado).toBe(-25);
  });

  it("Multiplicação de -3x-3 resultado será: 9", () => {
    const resultado = servico.Multiplicar(-3, -3);
    expect(resultado).toBe(9);
  });

});
