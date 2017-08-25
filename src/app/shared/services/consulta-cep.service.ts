import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ConsultaCepService {
    constructor(private _http: Http) { }

    consultarCEP(cep: string) {
        return this._http.get(`//viacep.com.br/ws/${cep}/json`)
                         .map(data => data.json());
    }
}