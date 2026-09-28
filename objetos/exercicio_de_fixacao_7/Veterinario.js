class Veterinario {

    #nome;
    #crmv;
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

    setCRMV(crmv) {
        if (crmv) {
            this.#crmv = crmv;
            return true;
        } else {
            return false;
        }
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
}

module.exports = Veterinario;