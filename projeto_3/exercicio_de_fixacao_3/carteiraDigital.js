 class CarteiraDigital {

    #titular;
    #saldo = 0;

    setdefinirTitular(titular) {
        this.#titular = titular;
    }

    getconsultarTitular() {
        return this.#titular;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        this.#saldo -= valor;
    }

    getconsultarSaldo() {
        return this.#saldo.toFixed(2);
    }

    exibirInformacoes() {
        console.log("Titular: " + this.#titular);
        console.log("Saldo: R$ " + this.#saldo.toFixed(2));
    }

 }

 module.exports = CarteiraDigital;

