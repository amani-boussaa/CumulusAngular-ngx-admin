import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Wallet } from '../../model/wallet';

import { lengthValidator } from './length.validator';
import { luhnValidator } from './luhn.validator';
import { environment } from '../../../../../../environments/environment';


@Component({
  selector: 'ngx-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
})
export class PaymentMethodComponent implements OnInit{
  paymentForm: FormGroup = new FormGroup({
  card_number: new FormControl(''),
  exp_month: new FormControl(''),
  exp_year: new FormControl(''),
  cvc: new FormControl(''),
});
  successMessage: string | null = null;
  errorMessage: string | null = null;
  submitted = false;
  cardType: string = 'unknown';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    
  }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      card_number: ['', [Validators.required, Validators.minLength(12),luhnValidator()]],
      exp_month: ['', [Validators.required, lengthValidator(2)]],
      exp_year: ['', [Validators.required, lengthValidator(4)]],
      cvc: ['', [Validators.required, lengthValidator(3)]]
    });
    // this.getWallet();

    // Subscribe to changes in the card_number field
  this.paymentForm.get('card_number')?.valueChanges.subscribe((value) => {
    this.cardType = this.getCardType(value);
  });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.paymentForm.controls;
  }

  addPaymentMethod(): void {
    this.submitted = true;

    const card_number = encodeURIComponent(this.paymentForm.value.card_number);
    const exp_month = encodeURIComponent(this.paymentForm.value.exp_month);
    const exp_year = encodeURIComponent(this.paymentForm.value.exp_year);
    const cvc = encodeURIComponent(this.paymentForm.value.cvc);

    let id = sessionStorage.getItem('id')
    const url = `${environment.urlBackend}` +`wallet/AddPaymentMethod/`+ id +`?card_number=${card_number}&exp_month=${exp_month}&exp_year=${exp_year}&cvc=${cvc}`;
    
    const body = {
      "wallet_id": "" // replace with your chosen wallet ID//
    };
    if (this.paymentForm.valid) {
      
    this.http.put<Wallet>(url, body).subscribe(
    (wallet) => {
      console.log(wallet);
      this.successMessage = 'Payment method added successfully!';
      this.errorMessage = null;
    },
    (error) => {
      
      console.log(error);
      this.successMessage = null;
      this.errorMessage = 'Error adding payment method: Card details not valid!';
    }
  );
    }
  }

  getCardType(cardNumber: string): string {
    // Remove all non-digit characters
    const digits = cardNumber.replace(/\D/g, '');
    // Define regular expressions for different card types
    const cardTypes = {
      visa: /^4/,
      mastercard: /^(5[1-5]|2[2-7])/,
      amex: /^3[47]/,
      discover: /^6(011|5|4[4-9]|22)/,
      diners: /^3(0[0-5]|[68])/,
      jcb: /^35/
    };
    // Check the card number against each regular expression
    for (const [cardType, pattern] of Object.entries(cardTypes)) {
      if (pattern.test(digits)) {
        return cardType;
      }
    }
    // If no match is found, return 'unknown'
    return 'unknown';
  }
  
}
