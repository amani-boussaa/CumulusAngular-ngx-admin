import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Wallet } from '../../model/wallet';

import { lengthValidator } from './length.validator';

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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    
  }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      card_number: ['', [Validators.required, Validators.minLength(12)]],
      exp_month: ['', [Validators.required, lengthValidator(2)]],
      exp_year: ['', [Validators.required, lengthValidator(4)]],
      cvc: ['', [Validators.required, lengthValidator(3)]]
    });
    // this.getWallet();
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

    const url = `http://localhost:8081/cumulus/wallet/AddPaymentMethod?card_number=${card_number}&exp_month=${exp_month}&exp_year=${exp_year}&cvc=${cvc}`;
    
    const body = {
      "wallet_id": "cus_NaAEGV2s1PY0fL" // replace with your chosen wallet ID
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
  
}
