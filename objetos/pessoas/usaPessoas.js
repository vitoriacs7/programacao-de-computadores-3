console.log("==== Objeto Pessoa ====")

const Pessoa = require('./pessoas/Pessoa');

const x = new Pessoa();

reposta = x.setNome('');
console.log(resposta);

if (resposta) {
    console.log(x.getNome());
} else {
    console.log("Nome vazio!");
}

resposta = x.setEmail('vitoria@gmail.com');
console.log(reposta);

if (resposta) {
    console.log(x.getEmail());
} else {
    console.log("E-mail vazio!");
}

console.log("==== Objeto PF ====")

const PF = require('./pessoas/PF');

const y = new PF ();

resposta = y.setNome('Vitória');
console.log(resposta);

if (resposta) {
    console.log(y.getNome());
} else {
    console.log("Nome vazio");
}

resposta = y.setEmail('');
console.log(resposta);

if (resposta) {
    console.log(y.getEmail());
} else {
    console.log("Email vazio!");
}

resposta = y.setCPF('123456789-10');
console.log(resposta);

if (resposta) {
    console.log(y.getCPF());
} else {
    console.log("CPF vazio");
}

console.log("==== Objeto PF ====");

const PJ = require('./pessoas/PJ');

const z = new PJ();

resposta = z.setNome('Empresa ABC');
console.log(resposta);

if (resposta) {
    console.log(z.getEmail());
} else {
    console.log("E-mail inválido");
}

resposta = z.setCNPJ('12.345.678/0001-90');
console.log(resposta);

if (resposta) {
    console.log(z.getCNPJ());
} else {
    console.log("CNPJ inválido");
}