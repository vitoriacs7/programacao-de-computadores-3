const Cliente = require('./Cliente.js');
const Prontuario = require('./Prontuario.js');
const Veterinario = require('./Veterinario.js');

class Animal {

    #nome;
    #especie;
    #cliente;
    #prontuario;
    #veterinarios = [];

    setNome(nome) {
        if (nome) {
            this.#nome = nome;
            return true;
        } else {
            return false;
        }
    }

    getNome() {
        return this.#nome;
    }

    setEspecie(especie) {
        if (especie) {
            this.#especie = especie;
            return true;
        } else {
            return false;
        }
    }

    getEspecie() {
        return this.#especie;
    }

    setCliente(cliente) {
        if (cliente instanceof Cliente) {
            this.#cliente = cliente;
            cliente.addAnimal(this);
            return true;
        } else {
            return false;
        }
    }

    getCliente() {
        return this.#cliente;
    }

    setProntuario(prontuario) {
        if (prontuario instanceof Prontuario) {
            this.#prontuario = prontuario;
            prontuario.setAnimal(this);
            return true
        } else {
            return false;
        }
    }

    getProntuario() {
        return this.#prontuario;
    }

    addVeterinario(veterinario) {
        if (veterinario instanceof Veterinario) {
            this.#veterinarios.push(veterinario);
            veterinario.addAnimal(this);
            return true;
        } else {
            return false;
        }
    }

    getVeterinarios() {
        return this.#veterinarios;
    }

    listarVeterinarios() {
        const lista = this.getVeterinarios();

        if (lista.length === 0 ) {
            console.log(`O animal ${this.#nome} não foi atendindo por nenhum veterinário.`);
            return;
        }

        console.log(`Veterinários responsáveis: `);
        this.getVeterinarios().forEach((veterinario) => { console.log(`• ${veterinario.nome}`); });
    }

}

module.exports = Animal;
