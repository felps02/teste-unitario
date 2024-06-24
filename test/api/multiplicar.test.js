const app = require("../../index");
const request = require("supertest");

describe("Teste de API pra multiplicar", () => {

  test("Multiplicação de dois números positivos", async () => {
    const response = await request(app)
      .post("/api/multiplicar")
      .send({ num1: 10, num2: 5 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 50 });
  });

  test("Multiplicação com zero", async () => {
    const response = await request(app)
      .post("/api/multiplicar")
      .send({ num1: 10, num2: 0 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 0 });
  });

  test("Multiplicação de número negativo com positivo", async () => {
    const response = await request(app)
      .post("/api/multiplicar")
      .send({ num1: -5, num2: 5 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: -25 });
  });

  test("Multiplicação de números decimais", async () => {
    const response = await request(app)
      .post("/api/multiplicar")
      .send({ num1: 2.5, num2: 4 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 10 });
  });
});
