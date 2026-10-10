export default class Endereco {

    #cep;          // atributos adicionados: complemento, estado e região.
    #logradouro;
    #bairro;
    #cidade;
    #uf;
    #complemento;
    #estado;
    regiao;

    async setCep(cep) {
        const url = `https://viacep.com.br/ws/${cep}/json`;

        const resposta = await fetch(url);

        if(!resposta.ok) {
            throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        if(dados.erro) {
            throw new Error("CEP não encontrado na base do ViaCep.");
        }

        this.#cep = dados.cep;
        this.#logradouro = dados.logradouro;
        this.#bairro = dados.bairro;
        this.#cidade = dados.localidade;
        this.#uf = dados.uf;
        this.#complemento = dados.complemento;
        this.#estado = dados.estado;
        this.#regiao = dados.regiao;

    }

    getCep() {
        return this.#cep;
    }

    getLogradouro() {
        return this.#logradouro;
    }

    getBairro() {
        return this.#bairro;
    }

    getCidade() {
        return this.#cidade;
    }

    getUf() {
        return this.#uf;
    }

    getComplemento() {
        return this.#complemento;
    }

    getEstado() {
        return this.#estado;
    }

    getRegiao() {
        return this.#regiao;
    }

    mostrarEnderecoCompleto() {
        const complementoFormatado = this.#complemento || 'não informado';
    
        return `CEP: ${this.#cep} | Logradouro: ${this.#logradouro}, ${complementoFormatado} | Bairro: ${this.#bairro} | Cidade: ${this.#cidade}/${this.#uf} | Estado: ${this.#estado} | Região: ${this.#regiao}`;
    }

}
