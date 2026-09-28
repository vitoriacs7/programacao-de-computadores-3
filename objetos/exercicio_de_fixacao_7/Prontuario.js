class Prontuario {

    #numero;
    #observacoes;
    
    setNumero(numero) {
        if (numero) {
            this.#numero = numero;
            return true;
        } else {
            return false;
        }
    }

    getNumero() {
        return this.#numero;
    }

    setObservacoes(observacoes) {
        if (observacoes) {
            this.#observacoes = observacoes;
            return true;
        } else {
            return false;
        }
    }

    getObservacoes() {
        return this.#observacoes;
    }

    #animal;

    setAnimal(animal) {
        if (animal) {
            this.#animal = animal;
            return true;
        } else {
            return false;
        }
    }

    getAnimal() {
        return this.#animal;
    }

}

module.exports = Prontuario;