const Pessoa = require('./Pessoa.js');

class Professor extends Pessoa {

    #disciplina;

    setDisciplina(disciplina) {
        if (disciplina != null && disciplina.length >= 5) {
            this.#disciplina = disciplina;
            return true;
        } else {
            return false;
        }
    }

    getDisciplina() {
        return this.#disciplina;
    }

    setEmail(email) {
        if (email != null && email.endWits(".edu.br")) {
            return super.setEmail(email);
        }
        return false;
        }

    }

    module.exports = Professor;

