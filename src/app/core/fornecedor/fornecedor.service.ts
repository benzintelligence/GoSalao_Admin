import { Endereco } from '../../shared/models/endereco';
import { Fornecedor } from './models/fornecedor';
import { FornecedorLista } from './models/fornecedorLista';
import { Injectable } from '@angular/core';

@Injectable()
export class FornecedorService {

    constructor() { }

    obterFornecedores() {
        let lista = new Array<FornecedorLista>();        
        lista.push(new FornecedorLista(1, 'H Hair e Beleza', '11 99653-2954', '11 2566-0054', 'contato@hairbeleza.com'));
        lista.push(new FornecedorLista(2, 'Bellus Cosméticos', '11 98752-6499', '11 4598-5554', 'bellus@bellus.com'));
        lista.push(new FornecedorLista(3, 'Teste 3', 'Teste 3', 'Teste 3', 'teste@teste.com'));
        lista.push(new FornecedorLista(4, 'Teste 4', 'Teste 4', 'Teste 4', 'teste@teste.com'));
        lista.push(new FornecedorLista(5, 'Teste 5', 'Teste 5', 'Teste 5', 'teste@teste.com'));
        return lista;
    }

    obterFornecedorPorId(id: String) {
        return new Fornecedor('1', 'Bellus Hair Lux', 'teste@teste.com', '2566-0030', '99653-2953', new Endereco('08141300', 'Rua Manuel Nunes Figueira', '190', '', 'Chácara Dona Olívia', 'São Paulo', 'SP'));
    }
}