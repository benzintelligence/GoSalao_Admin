import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FieldValidatorService {

    public verifyValidTouched(form: FormGroup, field: string) {
        return !form.get(field).valid && form.get(field).touched;
    }

    public applyCssError(form: FormGroup, field: string) {
        if (form.get(field).untouched) return;

        return !this.verifyValidTouched(form, field) ? 'valid' : 'invalid';        
    }

    public activeButtonSend(form: FormGroup) {
        return form.invalid || form.pristine;
      }
}