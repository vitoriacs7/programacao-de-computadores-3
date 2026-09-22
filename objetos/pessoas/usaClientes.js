const Pessoa = require('./exercicio_de_fixacao_5/Pessoa.js');
const PF = require('./exercicio_de_fixacao_5/PF.js');
const PJ = require('./exercicio_de_fixacao_5/PJ.js');

const p = new Pessoa();
resposta = p.setNome('Vitória');

if (resposta) {
    console.log(`Nome: ${p.getNome()}`);
} else {
    console.log("Erro! Insira um nome.");
}

resposta = p.setEmail('Vitoria@email.com');

if (resposta) {
    console.log(`E-mail: ${p.getEmail()}`);
} else {
    console.log("Erro! E-mail inválido.");
}

const pf = new PF();
resposta = pf.setNome('Vitória');

if (resposta) {
    console.log(`Nome: ${pf.getNome()}`);
} else {
    console.log("Erro! Insira um nome.");
}

resposta = pf.setEmail('Vitoria@email.com');

if (resposta) {
    console.log(`E-mail: ${pf.getEmail()}`);
} else {
    console.log("Erro! E-mail inválido.");
}

resposta = pf.setCPF('000.000.000-00');

if (resposta) {
    console.log(`CPF: ${pf.setCPF()} `);
} else {
    console.log("Erro! CPF inválido.")
}

const pj = new PJ();
resposta = pj.setNome('Vitória');

if (resposta) {
    console.log(`Nome: ${pj.getNome()}`);
} else {
    console.log("Erro! Insira um nome.");
}

resposta = pj.setEmail('Vitoria@email.com');

if (resposta) {
    console.log(`E-mail: ${pj.getEmail()}`);
} else {
    console.log("Erro! E-mail inválido.");
}

resposta = pj.setCNPJ('00.000.000/0001-91');

if (resposta) {
    console.log(`CNPJ: ${pj.setCNPJ()}`);
} else {
    console.log("Erro! CNPJ inválido.");
}

const pj1 = new PJ();
resposta = pj1.setNome('Victoria');

if (resposta) {
    console.log(`Nome: ${pj1.getNome()}`);
} else {
    console.log("Erro! Insira um nome.");
}

resposta = pj1.setEmail('Victoria@email.com');

if (resposta) {
    console.log(`E-mail: ${pj1.getEmail()}`);
} else {
    console.log("Erro! E-mail inválido.");
}

resposta = pj1.setCNPJ('00.000.000/0001');

if (resposta) {
    console.log(`CNPJ: ${pj1.setCNPJ()}`);
} else {
    console.log("Erro! CNPJ inválido.");
}

const p1 = new Pessoa();
resposta = p1.setNome('Victoria');

if (resposta) {
    console.log(`Nome: ${p1.getNome()}`);
} else {
    console.log("Erro! Insira um nome.");
}

resposta = p.setEmail('Victoriaemail.com');

if (resposta) {
    console.log(`E-mail: ${p1.getEmail()}`);
} else {
    console.log("Erro! E-mail inválido.");
}




