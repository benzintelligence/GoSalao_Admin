import { Endereco } from '../../../shared/models/endereco';

export class Cliente {
    constructor(
        public id: String = null,
        public nome: String = null,
        public email: String = null,
        public telefone: String = null,
        public celular: String = null,
        public endereco = null
    ) {
        if (!this.endereco) this.endereco = new Endereco();
    }
}
