import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-choose-card',
  templateUrl: './choose-card.component.html',
  styleUrls: ['./choose-card.component.scss']
})
export class ChooseCardComponent implements OnInit {

  last4: string;
  brand: string;
  exp_month: String;
  exp_year: String;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.getPaymentInfo();
  }

  getPaymentInfo() {
    this.http.get<any>('http://localhost:8081/cumulus/order/ChooseCard').subscribe(
      response => {
        this.last4 = response.last4;
        this.brand = response.brand;
        this.exp_month = response.exp_month;
        this.exp_year = response.exp_year;

        if (this.brand == null) {
          // Redirect to another page
          this.router.navigateByUrl('/pages/payment/AddPaymentMethod');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
