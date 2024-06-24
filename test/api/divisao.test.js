const app = require("../../index");
const request = require("supertest");

describe("Teste de API pra dividir", () => {

  test("Divisão de dois números positivos", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: 10, num2: 2 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 5 });
  });

  test("Divisão por zero deve retornar erro", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: 10, num2: 0 });

    expect(response.statusCode).toBe(400); // Assume que a API retorna um status 400 para divisão por zero
    expect(response.body).toHaveProperty('error');
  });

  test("Divisão de número negativo por positivo", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: -10, num2: 2 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: -5 });
  });

  test("Divisão de números decimais", async () => {
    const response = await request(app)
      .post("/api/dividir")
      .send({ num1: 5.5, num2: 2.2 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 2.5 });
  });
});
