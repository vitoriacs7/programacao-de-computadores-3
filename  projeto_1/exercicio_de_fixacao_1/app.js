const funcs = require('./conversores.js');

var a = 30, b = 2, c = 20, d = 3, e = 500, f = 40;

console.log(funcs.celsiusParaFahrenheit(a));
console.log(funcs.horasParaMinutos(b));
console.log(funcs.idadeEmDias(c));
console.log(funcs.kmParaMetros(d));
console.log(funcs.consumoMedio(e, f));