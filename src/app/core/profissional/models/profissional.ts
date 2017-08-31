import { Endereco } from '../../../shared/models/endereco';

export class Profissional {
    constructor(
        public id: String = null,
        public nome: String = null,
        public cargo: String = null,
        public telefone: String = null,
        public celular: String = null,
        public email: String = null,
        public senhaTemporaria: String = null,
        public endereco = null,
        public habilidades: String[] = null
    ) {
        if (!this.endereco) this.endereco = new Endereco();
    }
}