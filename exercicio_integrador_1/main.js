const Pessoa = require('.pessoas/Pessoa.js');
const Aluno = require('./pessoas/Aluno.js');
const Professor = require('./pessoas/Professor.js');
const util = require('./biblioteca/util.js');

const p1 = new Pessoa(); // pessoa válida
p1.setNome("Vitória");
p1.setEmail("vitoria@gmail.com");

const p2 = new Pessoa(); // nome (length >= 3) inválido
p2.setNome("Vi");
p2.setEmail("vi@email.com");

const a1 = new Aluno(); // aluno válido
a1.setNome("Pedro");
a1.setEmail("pedro@gmail.com");
a1.setMatricula("123456789111");

const a2 = new Aluno(); // email ("@") e matricula (length == 12) inválidos
a2.setNome("Victoria");
a2.setEmail("vicemail.com");
a2.setMatricula("12345");

const prof1 = new Professor();
prof1.setNome("Vaguetti")
prof1.setEmail("vaguetti@email.edu.br")
prof1.setDisciplina("Programação de computadores 3")

const prof2 = new Professor(); // email (".edu.br") e disciplina (length >= 5) inválidos 
prof2.setNome("Fabiano");
prof2.setEmail("fabiano@gmail.com");
prof2.setDisciplina("PC1");

console.log("Pessoa válida: ");
util.mostrarDados(p1);
console.log("Pesoa inválida: ");
util.mostrarDados(p2);
console.log("Aluno válido: ");
util.mostrarDados(a1);
console.log("Aluno inválido: ");
util.mostrarDados(a2);
console.log("Professor válido: ")
util.mostrarDados(prof1);
console.log("Professor inválido: ")
util.mostrarDados(prof2);