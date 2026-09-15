class Professor extends Pessoa {

    #disciplina;

    setDisciplina(disciplina) {
        
        if (disciplina) {
            this.#disciplina = disciplina;
            return true;
        } else {
            return false;
        }
    }

    getDisciplina() {
        return this.#disciplina;
    }

}