import Pessoa from './Pessoa.js';

export class PJ extends Pessoa {

    #cnpj;
    #razaoSocial;

    setCNPJ(cnpj) {
        if (cnpj) {
            this.#cnpj = cnpj
            return true;
        } else {
            return false;
        }
    }

    getCNPJ() {
        return this.#cnpj;
    }

    setRazaoSocial(razao) {
        if (razao) {
            this.#razaoSocial = razao;
            return true;
        } else {
            return false;
        }
    }

    getRazaoSocial() {
        return this.#razaoSocial;
    }

}