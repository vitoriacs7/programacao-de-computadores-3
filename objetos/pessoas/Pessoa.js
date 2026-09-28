const Telefone = require('./Telefone. js');
const Endereco = require('./Endereco.js')

class Pessoa {

    #nome;
    #email;

    // clases relacionadas com Pessoa
    #endereco;
    #telefones = [];

    setEndereco(endereco) {
        if (endereco instanceof Endereco) {
            this.#endereco = endereco;
            endereco.addPessoa(this);
            return true
        } else {
            return false;
        }
    }

    getEndereço () {
        return this.#endereco;
    }

    addTelefone(telefone) {
        if (telefone instanceof Telefone) {
            this.#telefones.push(telefone);
            telefone.addPessoa(this);
            return true;
        } else {
            return false;
        }
    }

    getTelefones() {
        return this.#telefones;
    }

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

    setEmail(email) {
        if (email) {
            this.#email = email;
            return true;
        } else {
            return false;
        }
    }

    getEmail() {
        return this.#email;
    }

}

module.exports = Pessoa;
