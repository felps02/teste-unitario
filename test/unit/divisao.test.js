const Servico = require("../../src/services/service");

describe("Função Divisão", () => {
  let servico = new Servico();

  it("Divisão de 10/10 resultado será: 1", () => {
    const resultado = servico.Dividir(10, 10);
    expect(resultado).toBe(1);
  });

  it("Divisão de -10/2 resultado será: -5", () => {
    const resultado = servico.Dividir(-10, 2);
    expect(resultado).toBe(-5);
  });

  it("Divisão de 5/2 resultado será: 2.5", () => {
    const resultado = servico.Dividir(5, 2);
    expect(resultado).toBe(2.5);
  });

  it("Divisão de 100/10 resultado será: 10", () => {
    expect(() => {
      servico.Dividir(100, 10);
    }).toThrow(10);
  });
});
