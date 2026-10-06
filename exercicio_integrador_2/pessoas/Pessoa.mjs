export default class Pessoa {

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
