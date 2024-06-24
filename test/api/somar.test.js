const app = require("../../index");
const request = require("supertest");

describe("Teste de API pra somar", () => {

  test("Soma de dois números", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: 10, num2: 10 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 20 });
  });

  test("Soma com zero", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: 0, num2: 10 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 10 });
  });

  test("Soma de número negativo com positivo", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: -5, num2: 5 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 0 });
  });

  test("Soma de números decimais", async () => {
    const response = await request(app)
      .post("/api/somar")
      .send({ num1: 2.5, num2: 3.5 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 6 });
  });
});
