const Pessoa = require('./Pessoa.js');

class Aluno extends Pessoa {
    
    #matrícula;

    setMatricula(matricula) {

        if (matricula && matricula.lenght >= 6) {
           this.#matricula = matricula;
            return true;
        } else {
            return false;
        }
    }

    getMatricula() {
        return this.#matrícula;
    }

}

module.exports = Aluno;