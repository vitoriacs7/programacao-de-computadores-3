const readLine = require('readLine/promises');
const { stdin: input, stdout: output } = require('process');

const Pessoa = require('./Pessoa.js');
const Aluno = require('./Aluno.js');
const Professor = require('./Professor.js');

async function executarMenu() {
    const rl = readLine.createInterface({ input, output});
    let opcao = '';

    while (opcao !== '5') {
        console.log('\n========= MENU =========');
        console.log('1 - Cadastrar Pessoa');
        console.log('2 - Cadastrar Aluno');
        console.log('3 - Cadastrar Professor');
        console.log('4 - Listar Dados');
        console.log('5 - Sair');
        console.log('==========================');

        opcao = await rl.question('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                console.log('\n-> Cadastrando Pessoa...');
                const nomePessoa = await rl.question('Digite o nome: ');
                const emailPessoa = await rl.question('Digite o e-mail: ');

                const p = new Pessoa();
                p.setNome(nomePessoa);

                if (p.setEmail(emailPessoa)) {
                    console.log('Sucesso: Pessoa cadastrada!')
                } else {
                    console.log('Erro: Email inválido!');
                }
                break;
            case '2':
                console.log('\n-> Cadastrando Aluno...');
                const nomeAluno = await rl.question('Digite o nome do aluno: ');
                const emailAluno = await rl.question('Digite o e-mail do aluno: ');
                const matriculaAluno = await rl.quar
                break;
            case '3': 
                console.log('\n-> Cadastrando Professor...');
                break;
            case '4':
                console.log('\n-> Listando Dados...');
                break;
            case '5' :
                console.log('\nSaindo... Até mais!');
            default:
                console.log('\n[Erro] Opção inválida!');
            }
        }
       rl.close();
    }   

    executarMenu();


const p = new Pessoa();
resposta = p.setNome('João Silva');

if (resposta) {
    console.log(`Nome: ${p.getNome()}`);
} else {
    console.log("Nome inválido!");
}

resposta = p.setEmail('joao@email.com');

if (resposta) {
    console.log(`Email: ${p.getEmail()}`);
} else {
    console.log("Email inválido!");
}

const p2 = new Pessoa();

resposta = p2.setNome('');

if (resposta) {
    console.log(`Nome: ${p2.getNome()}`);
} else {
    console.log("Nome inválido!");
}

resposta = p2.setEmail('');

if (resposta) {
    console.log(`Email: ${p2.getEmail()}`);
} else {
    console.log("Email inválido!");
}

const a = new Aluno();

resposta = a.getNome('Maria');

if (resposta) {
    console.log(`Nome: ${a.getNome()}`);
} else {
    console.log("Nome inválido!");
}

resposta = a.setEmail('maria@email.com');

if (resposta) {
    console.log(`Email: ${a.getEmail()}`);
} else {
    console.log("Email inválido!");
}

resposta = a.setMatricula('2025001');

if (resposta) {
    console.log(`Matrícula: ${a.getMatricula()}`);
} else {
    console.log("Matrícula inválida!");
}

const a2 = new Aluno();

resposta = a2.setNome('Pedro');

if (resposta) {
    console.log(`Nome: ${a2.getNome()}`);
} else {
    console.log("Nome inválido!");
}

resposta = a2.setEmail('');

if (resposta) {
    console.log(`Email: ${a2.getEmail()}`);
} else {
    console.log("Email inválido!");
}

resposta = a2.setMatricula('');

if (resposta) {
    console.log(`Matrícula: ${a2.getMatricula()}`);
} else {
    console.log("Matrícula inválida!");
}

const prof = new Professor();

resposta = prof.setNome('Carlos');

if (resposta) {
    console.log(`Nome: ${prof.getNome()}`);
} else {
    console.log("Nome inválido!");
}

resposta = prof.setEmail('carlos@email.com');

if (resposta) {
    console.log(`Email: ${prof.getEmail()}`);
} else {
    console.log("Email inválido!");
}

resposta = prof.setDisciplina('Programação Web');

if (resposta) {
    console.log(`Disciplina: ${prof.getDisciplina()}`);
} else {
    console.log("Disciplina inválida");
}

const prof2 = new Professor();

resposta = prof2.setNome('Ana');

if (resposta) {
    console.log(`Nome: ${prof2.getNome()}`);
} else {
    console.log("Nome inválido!");
}

resposta = prof2.setEmail('ana@email.com');

if (resposta) {
    console.log(`Email: ${prof2.getEmail()}`);
} else {
    console.log("Email inválido!");
}

resposta = prof2.setDisciplina('');

if (resposta) {
    console.log(`Disciplina: ${prof2.getDisciplina()}`);
} else {
    console.log("Disciplina inválida");
}











