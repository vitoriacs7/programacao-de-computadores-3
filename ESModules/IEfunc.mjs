import { PJ } from '../exercicio_integrador_2/pessoas/PJ.mjs'; 

export function IEfunc() { // exportação nomeada por meio de uma função fábrica JS
    let dados = { 
        numero: null,
        estado: null,
        dataRegistro: null,
        pj: null
    };

    function setNumero(numero) {
        if (numero) {
            dados.numero = numero;
            return true;
        } else {
            return false;
        }
    }

    function getNumero() {
        return dados.numero;
    }

    function setEstado(estado) {
        if (estado) {
            dados.estado = estado;
            return true;
        } else {
            return false;
        }
    }

    function getEstado() {
        return dados.estado;
    }

    function setDataRegistro(data) {
        if (data instanceof Date) {
            dados.dataRegistro = data;
            return true;
        } else {
            return false;
        }
    }

    function getDataRegistro() {
        return dados.dataRegistro;
    }

    function setPJ(pj) {
        if (pj instanceof PJ) {
            dados.pj = pj;
            return true;
        } else {
            return false;
        }
    }

    function getPJ() {
        return dados.pj;
    }

    return {
        setNumero,
        getNumero,
        setEstado,
        getEstado,
        setDataRegistro,
        getDataRegistro,
        setPJ,
        getPJ
    };
}

// Mantém os dados no escopo da função e retorna um objeto contendo os métodos públicos.