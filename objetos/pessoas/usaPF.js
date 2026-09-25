const Telefone = require('./pessoas/Telefone.js');
const Endereco = require('./pessoas/Endereco.js');
const Titulo = require('./pessoas/Titulo.js');

const PF = require('./pessoas/PF.js');

const end = new Endereco();
const fone1 = new Telefone();
const fone2 = new Telefone();

end.setLogradouro('QNM 40');

fone1.setNumero('1234-5678');
fone2.setNumero('1255-5578');

const titulo = new Titulo();
titulo.setNumero('1234156');
titulo.setSecao('DF');

const obj = new PF();

obj.setNome('José');

obj.setEndereco(end);

obj.addTelefone(fone1);
obj.addTelefone(fone2);

obj.setTitulo(titulo);

console.log(obj.getNome());

console.log(obj.getEndereco().getLogradouro());

console.log(obj.getTelefones());

console.log(obj.getTitulo().getNumero());

console.log(end.getPessoas());

console.log(fone1.getPessoas());

console.log(titulo.getPF().getNome());
