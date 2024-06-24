const app = require("../../index");
const request = require("supertest");

describe("Teste de API pra subtrair", () => {

  test("Subtração de dois números positivos", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: 10, num2: 5 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 5 });
  });

  test("Subtração com zero", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: 10, num2: 0 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 10 });
  });

  test("Subtração de número negativo com positivo", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: -5, num2: 5 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: -10 });
  });

  test("Subtração de números decimais", async () => {
    const response = await request(app)
      .post("/api/subtrair")
      .send({ num1: 5.5, num2: 2.5 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 3 });
  });
});
