import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function luhnValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
      let cardNum = parseInt(value[i]);
      if ((value.length - i) % 2 === 0) {
        cardNum = cardNum * 2;
        if (cardNum > 9) {
          cardNum = cardNum - 9;
        }
      }
      sum += cardNum;
    }
    // console.log('Luhn validation result:', sum % 10 === 0);
    return sum % 10 === 0 ? null : { luhn: true };
  };
}