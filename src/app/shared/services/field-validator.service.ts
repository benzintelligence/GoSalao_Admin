import { Injectable } from '@angular/core';

@Injectable()
export class FieldValidatorService {

    public verifyValidTouched(field: any) {
        return !field.valid && field.touched;
    }

    public applyCssError(field: any) {
        if (field.untouched) return;
        
        return !this.verifyValidTouched(field) ? 'valid' : 'invalid';
    }

    public activeButtonSend(form) {
        return form.invalid || form.pristine;
      }
}