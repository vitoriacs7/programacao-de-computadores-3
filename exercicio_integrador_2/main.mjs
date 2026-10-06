import IEclss, { IEfunc, IEjson } from './objetos/IE.mjs';
import { PJ } from './pessoas/PJ.mjs';

console.log('=== TESTES DO SISTEMA ===\n');

const pj1 = new PJ();
pj1.setNome('Empresa Alpha');
pj1.setEmail('alpha@empresa.com');
pj1.setCNPJ('12.345.678/0001-99');
pj1.setRazaoSocial('Alpha Comércio LTDA');

const pj2 = new PJ();
pj2.setNome('Empresa Beta');
pj2.setEmail('beta@empresa.com');
pj2.setCNPJ('98.765.432/0001-11');
pj2.setRazaoSocial('Beta Soluções S.A.');

const dataRegistro = new Date();

const ieClass = new IEclss();
ieClass.setNumero('00112233');
ieClass.setEstado('DF');
ieClass.setDataRegistro(dataRegistro);

const ieFunc = IEfunc();
ieFunc.setNumero('44556677');
ieFunc.setEstado('GO');
ieFunc.setDataRegistro(dataRegistro);

IEjson.setNumero('88990011');
IEjson.setEstado('SP');
IEjson.setDataRegistro(dataRegistro);

const objetoInvalido = {
    nome: 'Empresa Inválida'
};

console.log('--- Testes de Validação (instanceof) ---');
console.log('IEclss com objeto inválido:', ieClass.setPJ(objetoInvalido)); 
console.log('IEclss com PJ válida:', ieClass.setPJ(pj1)); 

console.log('IEfunc com objeto inválido:', ieFunc.setPJ(objetoInvalido)); 
console.log('IEfunc com PJ válida:', ieFunc.setPJ(pj2)); 

console.log('IEjson com objeto inválido:', IEjson.setPJ(objetoInvalido)); 
console.log('IEjson com PJ válida:', IEjson.setPJ(pj1)); 


console.log('\n========================================');
console.log('=== Relatório Final - IEclss ===');
console.log('=== Pessoa Jurídica ===');
console.log('Nome:', ieClass.getPJ().getNome());
console.log('E-mail:', ieClass.getPJ().getEmail());
console.log('CNPJ:', ieClass.getPJ().getCNPJ());
console.log('Razão Social:', ieClass.getPJ().getRazaoSocial());
console.log('\n=== Inscrição Estadual ===');
console.log('Número:', ieClass.getNumero());
console.log('Estado:', ieClass.getEstado());
console.log('Data de Registro:', ieClass.getDataRegistro().toLocaleString('pt-BR'));
console.log('Pessoa Jurídica (Razão Social):', ieClass.getPJ().getRazaoSocial());

console.log('\n========================================');
console.log('=== Relatório Final - IEfunc ===');
console.log('=== Pessoa Jurídica ===');
console.log('Nome:', ieFunc.getPJ().getNome());
console.log('E-mail:', ieFunc.getPJ().getEmail());
console.log('CNPJ:', ieFunc.getPJ().getCNPJ());
console.log('Razão Social:', ieFunc.getPJ().getRazaoSocial());
console.log('\n=== Inscrição Estadual ===');
console.log('Número:', ieFunc.getNumero());
console.log('Estado:', ieFunc.getEstado());
console.log('Data de Registro:', ieFunc.getDataRegistro().toLocaleString('pt-BR'));
console.log('Pessoa Jurídica (Razão Social):', ieFunc.getPJ().getRazaoSocial());

console.log('\n========================================');
console.log('=== Relatório Final - IEjson ===');
console.log('=== Pessoa Jurídica ===');
console.log('Nome:', IEjson.getPJ().getNome());
console.log('E-mail:', IEjson.getPJ().getEmail());
console.log('CNPJ:', IEjson.getPJ().getCNPJ());
console.log('Razão Social:', IEjson.getPJ().getRazaoSocial());
console.log('\n=== Inscrição Estadual ===');
console.log('Número:', IEjson.getNumero());
console.log('Estado:', IEjson.getEstado());
console.log('Data de Registro:', IEjson.getDataRegistro().toLocaleString('pt-BR'));
console.log('Pessoa Jurídica (Razão Social):', IEjson.getPJ().getRazaoSocial());