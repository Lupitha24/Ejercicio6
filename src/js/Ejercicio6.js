// Convertir un numero entero a texto
let numero = 24;

// Metodo 1: Usando toString()
let texto1 = numero.toString();
console.log("Metodo 1 (toString()):", texto1, typeof texto1);

// Metodo 2: Usando concatenacion con una cadena vacia
let texto2 = numero + "";
console.log("Metodo 2 (concatenacion):", texto2, typeof texto2);

// Metodo 3: Usando String()
let texto3 = String(numero);
console.log("Metodo 3 (String()):", texto3, typeof texto3);

// Paso 2: Convertir un texto a numero
let textoNumero = "2413";

// Metodo 1: Usando Number()
let num1 = Number(textoNumero);
console.log("Metodo 1 (Number()):", num1, typeof num1);

// Metodo 2: Usando parseInt()
let num2 = parseInt(textoNumero);
console.log("Metodo 2 (parseInt()):", num2, typeof num2);