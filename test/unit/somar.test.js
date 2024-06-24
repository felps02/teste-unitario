const Servico = require("../../src/services/service");

describe("Função Somar", () => {
  let servico = new Servico();

  it("Soma de 10 + 10 resultado será: 20", () => {
    const resultado = servico.Somar(10, 10);
    expect(resultado).toBe(20);
  });

  it("Soma de 0 + 10 resultado será: 10", () => {
    const resultado = servico.Somar(0, 10);
    expect(resultado).toBe(10);
  });

  it("Soma de -5 + 5 resultado será: 0", () => {
    const resultado = servico.Somar(-5, 5);
    expect(resultado).toBe(0);
  });

  it("Soma de 2.5 + 3.5 resultado será: 5", () => {
    const resultado = servico.Somar(2, 3);
    expect(resultado).toBe(5);
  });
});
