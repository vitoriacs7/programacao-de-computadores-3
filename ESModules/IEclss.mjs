import { PJ } from '../exercicio_integrador_2/pessoas/PJ.mjs'; 

export default class IEclss { // exportação padrão do módulo por meio da  classe JS
    #numero;
    #estado;
    #dataRegistro;
    #pj;

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

    setEstado(estado) {
        if (estado) {
            this.#estado = estado;
            return true;
        } else {
            return false;
        }
    }

    getEstado() {
        return this.#estado;
    }

    setDataRegistro(dataRegistro) {
        if (dataRegistro instanceof Date) {
            this.#dataRegistro = dataRegistro;
            return true;
        } else {
            return false;
        }
    }

    getDataRegistro() {
        return this.#dataRegistro;
    }

    setPJ(pj) {
        if (pj instanceof PJ) {
            this.#pj = pj;
            return true;
        } else {
            return false;
        }
    }

    getPJ() {
        return this.#pj;
    }

    
} 

// Utiliza atributos privados (#) e métodos públicos para controlar o acesso aos dados.