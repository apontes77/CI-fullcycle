const { soma, subtracao, multiplicacao, divisao } = require("./calculator");

test("soma 1 + 2 é igual a 3", () => {
  expect(soma(1, 2)).toBe(3);
});

test("subtração 5 - 3 é igual a 2", () => {
  expect(subtracao(5, 3)).toBe(2);
});

test("multiplicação 2 * 4 é igual a 8", () => {
  expect(multiplicacao(2, 4)).toBe(8);
});

test("divisão 10 / 2 é igual a 5", () => {
  expect(divisao(10, 2)).toBe(5);
});

test("divisão por zero deve lançar um erro", () => {
  expect(() => {
    divisao(10, 0);
  }).toThrow("Não é possível dividir por zero.");
});
