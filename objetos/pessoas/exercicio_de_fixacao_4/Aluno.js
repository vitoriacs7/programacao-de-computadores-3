class Aluno extends Pessoa {
    
    #matrícula;

    setMatricula(matricula) {

        if (matricula) {
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