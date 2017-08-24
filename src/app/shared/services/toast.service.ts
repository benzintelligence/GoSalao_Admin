import { Injectable } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';

declare var Materialize: any;

@Injectable()
export class ToastService {
    constructor() { }

    toast(text: string, style: string = '', duration: number = 4000) {
        Materialize.toast(text, duration, style);
    }
}