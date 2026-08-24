class Aluno {

    #matricula;
    #curso;
    escola;

    setMatriculas(matricula) {
        this.#matricula = matricula;
    }

    getMatriculas() {
        return this.#matricula;
    }

    setCurso(curso) {
        this.#curso = curso;
    }

    getCurso() {
        return this.#curso;
    }

}

module.exports = Aluno;