import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { ProfissionalLista } from "./models/profissionalLista";
import { Profissional } from "./models/profissional";
import { Endereco } from "../../shared/models/endereco";

@Injectable()
export class ProfissionalService {

    constructor(private _http: Http) { }

    obterProfissionais() {
        let lista = new Array<ProfissionalLista>();
        lista.push(new ProfissionalLista(1, 'Sr. João Barber', '11 99653-2954', '11 2566-0054', 'contato@hairbeleza.com'));
        lista.push(new ProfissionalLista(2, 'Dona Maria de Fátima', '11 98752-6499', '11 4598-5554', 'bellus@bellus.com'));
        lista.push(new ProfissionalLista(3, 'Dona Lucinda', 'Teste 3', 'Teste 3', 'teste@teste.com'));
        lista.push(new ProfissionalLista(4, 'Paulo Roberto', 'Teste 4', 'Teste 4', 'teste@teste.com'));
        lista.push(new ProfissionalLista(5, 'Teste 5', 'Teste 5', 'Teste 5', 'teste@teste.com'));
        return lista;
    }

    obterProfissionalPorId(id: String) {
        return new Profissional('1', 'Paulo Roberto', 'Cabeleireiro', '2566-0030', '99653-2953', 'prrl@gmail.com', null,
                new Endereco('01001000', 'Pça da Sé', 'SN', '', 'Centro', 'São Paulo', 'SP'),
                ["Corte", "Manicure", "Pedicure", "Depilação"]
            );
    }
}