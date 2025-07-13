const suma = require("../src/sum");

test("dodaje 1 + 2 to 3", () => {
  expect(suma(1, 2)).toBe(3);
});
