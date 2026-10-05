const sistema = require("./sistema");

describe("verificar Maioridade", () => {
  test("deve retornar true para idade maior ou igual a 18", () => {
    expect(sistema.verificarMaioridade(18)).toBe(true);
  });
});

describe("Calcular IMC", () => {
  test("Deve retornar o imc em numerico e com 2 casas decimais", () => {
    expect(sistema.calcularIMC(70, 1.75)).toBe(22.86);
  });
});

describe("Formatar Nome", () => {
  test("Deve retornar o nome e o sobrenome formatado", () => {
    expect(sistema.formatarNome("Davi", "Nunes")).toBe("Nunes, Davi");
  });
});

describe("Verificar pariedade", () => {
  test("Deve retonar True para par e False para Ímpar", () => {
    expect(sistema.ehPar(5)).toBe(false);
  });
});

describe("Celsius Para Fahrenheit", () => {
  test("Deve retornar converter um valor de celsius para Fahrenheit", () => {
    expect(sistema.celsiusParaFahrenheit(35)).toBe(95);
  });
});

describe("Adicionar Hobby", () => {
  test("Deve adicionar um hobby em uma lista", () => {
    expect(
      sistema.adicionarHobby(["gosto", "gosto demais"], "De Voce"),
    ).toEqual(["gosto", "gosto demais", "De Voce"]);
  });
});

describe("Dividir", () => {

    test("Deve dividir um numero inteiro", () => {
        expect(sistema.dividir(10, 2)).toBe(5);
    });

    test("Deve impedir divisão por zero", () => {
        expect(() => sistema.dividir(10, 0))
            .toThrow("Divisão por zero não permitida");
    });

});

describe("Criar Aluno", () => {

    test("Deve criar um aluno", () => {
        expect(sistema.criarAluno("Davi", "ADS")).toEqual({
            nome: "Davi",
            curso: "ADS",
            ativo: true,
        });
    });

});

describe("Aplicar Desconto", () => {

    test("Deve receber um valor e uma porcentagem e aplicar o desconto", () => {
        expect(sistema.aplicarDesconto(100, 25)).toBe(75);
    });

});

describe("Validar Tamanho da Senha", () => {

    test("Deve retornar true para senha com 8 ou mais caracteres", () => {
        expect(sistema.validarTamanhoSenha("12345678")).toBe(true);
    });

    test("Deve retornar false para senha com menos de 8 caracteres", () => {
        expect(sistema.validarTamanhoSenha("1234567")).toBe(false);
    });

});