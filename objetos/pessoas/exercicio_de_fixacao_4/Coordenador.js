const Professor = require('./Professor.js');

class Coordenador extends Professor {

    #setor;

    setSetor(setor) {
        
        if (setor) {
            this.#setor = setor;
            return true;
        } else {
            return false;
        }
    }

    getSetor() {
        return this.#setor;
    }
}

module.exports = Coordenador;