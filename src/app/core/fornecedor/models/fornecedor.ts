export class Fornecedor {
    constructor(
        public id: String = null,
        public nome: String = null,
        public email: String = null,
        public telefone: String = null,
        public celular: String = null,

        public cep: String = null,
        public logradouro: String = null,
        public numero: String = null,
        public complemento: String = null,
        public bairro: String = null,
        public cidade: String = null,
        public uf: String = null
    ) { }
}