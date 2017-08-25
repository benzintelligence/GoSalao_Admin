export class Endereco {

    constructor(
        public cep: String = null,
        public logradouro: String = null,
        public numero: String = null,
        public complemento: String = null,
        public bairro: String = null,
        public cidade: String = null,
        public uf: String = null
    ) { }
}