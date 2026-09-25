console.log("==== Objeto Pessoa ====")

const Pessoa = require('./pessoas/Pessoa.js');

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

const PF = require('./pessoas/PF.js');

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

console.log("==== Objeto PJ ====");

const PJ = require('./pessoas/PJ.js');

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

console.log("==== Objeto Aluno ====");
const Aluno = require('./pessoas/Aluno.js');
const w = new Aluno();

resposta = w.setNome('Vitória');
console.log(resposta);

if (resposta) {
    console.log(w.getNome());
} else {
    console.log("Nome vazio");
}

resposta = w.setMatricula('20123456');
console.log(resposta);

if (resposta) {
    console.log(w.getMatricula());
} else {
    console.log("Matrícula inválida");
}

resposta = w.setCurso('SIS');
console.log(resposta);

if (resposta) {
    console.log(w.getCurso());
} else {
    console.log("Curso inválido");
}
