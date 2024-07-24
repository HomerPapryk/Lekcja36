// Deklaracja i inicjalizacja stałych
const number = 42; // Number
const text = "Hello, world!"; // String
const logic = true; // Boolean
const empty = null; // null
const args = [1, 2, 3]; // Array
const obj = { firstField: "obj" }; // Object

// Eksportowanie stałych, aby moduł testujący mógł je sprawdzić
module.exports = {
  number,
  text,
  logic,
  empty,
  args,
  obj,
};
