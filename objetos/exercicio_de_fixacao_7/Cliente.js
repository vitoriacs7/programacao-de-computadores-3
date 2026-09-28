const Animal = require('./Animal.js');

class Cliente {

    #nome;
    #telefone;
    #animais = [];

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

    setTelefone(telefone) {
        if (telefone) {
            this.#telefone = telefone;
            return true;
        } else {
            return false;
        }
    }

    getTelefone() {
        return this.#telefone;
    }

    addAnimal(animal) {
        if (animal) {
            this.#animais.push(animal);
            return true;
        } else {
            return false;
        }
    }

    getAnimais() {
        return this.#animais;
    }

    listarAnimais() {
        const lista = this.getAnimais();

        if (lista.length === 0 ) {
            console.log(`O cliente ${this.#nome} não possui animais.`);
            return;
        }

        console.log(`Cliente: ${this.nome}`);
        console.log(`Animais: `);
        this.getAnimais().forEach((animal) => { console.log(`• ${animal.nome}`); });

    }  

}

module.exports = Cliente;