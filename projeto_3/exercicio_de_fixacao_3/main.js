const CarteiraDigital = require('./carteiraDigital.js');

const carteira = new CarteiraDigital();

carteira.setdefinirTitular('João Silva');
carteira.depositar(200);

console.log(carteira.getconsultarSaldo());

carteira.sacar(50);

console.log(carteira.getconsultarSaldo());

carteira.sacar(500)

carteira.exibirInformacoes(); 
