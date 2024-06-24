const Servico = require("../../src/services/service");

describe("Função Subtrair", () => {
  let servico = new Servico();

  it("Subtração de 9-10 resultado será: -1", () => {
    const resultado = servico.Subtrair(9, 10);
    expect(resultado).toBe(-1);
  });

  it("Subtração de 10-10 resultado será: 0", () => {
    const resultado = servico.Subtrair(10, 10);
    expect(resultado).toBe(0);
  });

  it("Subtração de 20-10 resultado será: 10", () => {
    const resultado = servico.Subtrair(20, 10);
    expect(resultado).toBe(10);
  });

  it("Subtração de 1000-1 resultado será: 999", () => {
    const resultado = servico.Subtrair(1000, 1);
    expect(resultado).toBe(999);
  });

});