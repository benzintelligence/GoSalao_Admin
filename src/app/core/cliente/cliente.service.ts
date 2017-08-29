import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ClienteLista } from './models/clienteLista';
import { Cliente } from './models/cliente';
import { Endereco } from '../../shared/models/endereco';

@Injectable()
export class ClienteService {

    constructor(private _http: Http) { }

    obterClientes() {
        let lista = new Array<ClienteLista>();
        lista.push(new ClienteLista(1, 'H Hair e Beleza', '11 99653-2954', '11 2566-0054', 'contato@hairbeleza.com'));
        lista.push(new ClienteLista(2, 'Bellus Cosméticos', '11 98752-6499', '11 4598-5554', 'bellus@bellus.com'));
        lista.push(new ClienteLista(3, 'Teste 3', 'Teste 3', 'Teste 3', 'teste@teste.com'));
        lista.push(new ClienteLista(4, 'Teste 4', 'Teste 4', 'Teste 4', 'teste@teste.com'));
        lista.push(new ClienteLista(5, 'Teste 5', 'Teste 5', 'Teste 5', 'teste@teste.com'));
        return lista;
    }

    obterClientePorId(id: String) {
        return new Cliente('1', 'Dona Maria Joaquina', 'mariajoaquina@gmail.com', '2566-0030', '99653-2953',
                new Endereco('01001000', 'Pça da Sé', 'SN', '', 'Centro', 'São Paulo', 'SP'));
    }
}