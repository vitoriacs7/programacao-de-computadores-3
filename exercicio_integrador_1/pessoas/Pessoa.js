const util = require('../biblioteca/util.js');

class Pessoa {

    #nome; 
    #email;

    setNome(nome) {
        if (nome != null && nome.length >= 3) {
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
        if (util.validarEmail(email)) {
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