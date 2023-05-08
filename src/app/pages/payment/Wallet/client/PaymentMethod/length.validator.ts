import { AbstractControl, ValidatorFn } from '@angular/forms';

export function lengthValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value === null || value === '') {
      return null;
    }
    const strValue = String(value);
    const valid = strValue.length === length;
    return valid ? null : { length: { valid: false, value: length } };
  };
}
