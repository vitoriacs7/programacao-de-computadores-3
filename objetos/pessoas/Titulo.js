class Titulo {
    
    #numero;
    #zona;
    #secao;

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

    setZona(zona) {
        if (zona) {
            this.#zona = zona;
            return true;
        } else {
            return false;
        }
    }
    
    getZona() {
        return this.#zona;
    }

    setSecao(secao) {
        if (secao) {
            this.#secao = secao;
            return true;
        } else {
            return false;
        }
    }

    getSecao() {
        return this.#secao;
    }

    #pf;

     setPF(pf) {
        if (pf) {
            this.#pf = pf;
            return true;
        } else {
            return false;
        }
    }

    getPF() {
        return this.#pf;
    }

}

module.exports = Titulo;