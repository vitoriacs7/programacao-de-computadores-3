import { PJ } from '../exercicio_integrador_2/pessoas/PJ.mjs'; 

export const IEjson = { // exportação nomeada por meio do objeto literal JS
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,

    setNumero(numero) {
        if (numero) {
            this.numero = numero;
            return true;
        } else {
            return false;
        }
    },

    getNumero() {
        return this.numero;
    },

    setEstado(estado) {
        if (estado) {
            this.estado = estado;
            return true;
        } else {
            return false;
        }
    },

    getEstado() {
        return this.estado;
    },

    setDataRegistro(data) {
        if (data instanceof Date) {
            this.dataRegistro = data;
            return true;
        } else {
            return false;
        }
    },

    getDataRegistro() {
        return this.dataRegistro;
    },

    setPJ(pj) {
        if (pj instanceof PJ) {
            this.pj = pj;
            return true;
        } else {
            return false;
        }
    },

    getPJ() {
        return this.pj;
    }
};

// Mantém propriedades e métodos diretamente em um objeto JavaScript.
