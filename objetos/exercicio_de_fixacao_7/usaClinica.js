const Cliente = require('./Cliente.js');
const Animal = require('./Animal.js');
const Prontuario = require('./Prontuario.js');
const Veterinario = require('./Veterinario.js');

const cliente = new Cliente();
cliente.setNome("Ana Souza");
cliente.setTelefone("(11) 98765-4321");

const animal1 = new Animal();
animal1.setNome("Thor");
animal1.setEspecie("Cachorro");

const animal2 = new Animal();
animal2.setNome("Mel");
animal2.setEspecie("Gato"); 

const prontuario1 = new Prontuario();
prontuario1.setNumero(101);
prontuario1.setObservacoes("Vacinação em dia, peso ideal.");
animal1.setProntuario(prontuario1);

const prontuario2 = new Prontuario();
prontuario2.setNumero(102);
prontuario2.setObservacoes("Alergia leve a ração de frango.");
animal2.setProntuario(prontuario2);

const vet1 = new Veterinario();
vet1.setNome("Dr. Roberto");
vet1.setCRMV("CRMV-1234");

const vet2 = new Veterinario();
vet2.setNome("Dra. Camila");
vet2.setCRMV("CRMV-5678");

animal1.setCliente(cliente);
animal2.setCliente(cliente);

animal1.addVeterinario(vet1);
animal1.addVeterinario(vet2);
animal2.addVeterinario(vet1);

console.log("------ RELATÓRIO DA CLÍNICA ------");

console.log(`Cliente: ${cliente.getNome()}`);
console.log(`Telefone: ${cliente.getTelefone()}\n`);

console.log("ANIMAIS DO CLIENTE: ");
cliente.listarAnimais();

console.log("DETALHES, PRONTUÁRIOS E VETERINÁRIOS: ");

console.log(`Animal: ${animal1.getNome()}`);
console.log(`Prontuário (Nº ${animal1.getProntuario().getNumero()}): ${animal1.getProntuario().getObservacoes()}`);
animal1.listarVeterinarios();


console.log(`Animal: ${animal2.getNome()}`);
console.log(`Prontuário (Nº ${animal2.getProntuario().getNumero()}): ${animal2.getProntuario().getObservacoes()}`);
animal2.listarVeterinarios();

console.log(`O dono do animal ${animal1.getNome()} é: ${animal1.getCliente().getNome()}`);
console.log(`O prontuário ${prontuario1.getNumero()} pertence ao animal: ${prontuario1.getAnimal().getNome()}`);

