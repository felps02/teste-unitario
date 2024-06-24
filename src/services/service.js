class ServicoExercicio {
  Somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(
        "Valores inválidos fornecidos (apenas números são permitidos)"
      );
    }
    if (num2 === null) {
      throw new Error("Todos os campos devem ser preenchidos para somar");
    }

    return num1 + num2;
  }

  Subtrair(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(
        "Valores inválidos fornecidos (apenas números são permitidos)"
      );
    }
    if (num2 === null) {
      throw new Error("Todos os campos devem ser preenchidos para subtrair");
    }

    return num1 - num2;
  }

  Dividir(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(
        "Valores inválidos fornecidos (apenas números são permitidos)"
      );
    }
    if (num2 === 0) {
      throw new Error(
        "Divisão por zero não permitida, pois resulta em infinito"
      );
    }
    if (num1 === null) {
      throw new Error("Todos os campos devem ser preenchidos para dividir");
    }

    return num1 / num2;
  }

  Multiplicar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error(
        "Valores inválidos fornecidos (apenas números são permitidos)"
      );
    }
    if (num1 === null || num2 === null) {
      throw new Error(
        "Todos os campos devem ser preenchidos para multiplicar"
      );
    }
    return num1 * num2;
  }
}

module.exports = ServicoExercicio;
