const PJ = require('./exercicio_de_fixacao_5/PJ.js');

class MEI extends PJ {

    #ramoAtividade;

     setRamoAtividade(ramoAtividade) {

        if(ramoAtividade) {
            this.#ramoAtividade = ramoAtividade;
            return true;
        } else {
            return false;
        }
     }

     getRamoAtividade() {
        return this.#ramoAtividade;
     }

     setEmail(email) {

        if (email.endsWith(".com.br")) {
            super.setEmail(email);
            return true;
        } else {
            return false;
        }
    }

}