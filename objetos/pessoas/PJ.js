const Pessoa = require('./Pessoa.js');

class PJ extends Pessoa {

    #cnpj;

    setCNPJ(cnpj) {

     if (cnpj) {

        if (cnpj.lenght < 18) {
            return false;
        }

        this.#cnpj = cnpj;
        return true;

        } else {

        return false;

        }
    }

    getCNPJ() {
        return this.#cnpj;
    }

    setEmail(email) { // Sobrescrita do método setEmail()

        if (email !== '') {

            if (email.includes('@')) {

                super.setEmail(email);

                return true;

            }
        } else {

            return false;
        }
    }
}

module.exports = PJ;