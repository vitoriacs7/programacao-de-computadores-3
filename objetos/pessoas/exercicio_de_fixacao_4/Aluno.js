const Pessoa = require('./Pessoa.js');

class Aluno extends Pessoa {
    
    #matricula;

    setMatricula(matricula) {

        if (matricula && matricula.lenght >= 6) {
           this.#matricula = matricula;
            return true;
        } else {
            return false;
        }
    }

    getMatricula() {
        return this.#matricula;
    }

}

module.exports = Aluno;