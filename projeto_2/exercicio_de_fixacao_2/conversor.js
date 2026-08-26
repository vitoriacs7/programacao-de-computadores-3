class Conversor {

    constructor(celsius, km, minutos) {
        this.celsius = celsius;
        this.km = km;
        this.minutos = minutos;
    }

    celsiusParaFahrenheit(celsius) {
        let celsiusParaFahrenheit = (9/5) * celsius + 32;
        return celsiusParaFahrenheit;
    }

    quilometrosParaMilhas(km) {
        let quilometrosParaMilhas = km * 0.621371
        return quilometrosParaMilhas;
    }

    minutosParaHoras(minutos) {
        let minutosParaHoras = minutos / 60;
        return minutosParaHoras;
    }

}


module.exports = Conversor;