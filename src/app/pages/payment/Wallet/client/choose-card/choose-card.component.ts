import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-choose-card',
  templateUrl: './choose-card.component.html',
  styleUrls: ['./choose-card.component.scss']
})
export class ChooseCardComponent implements OnInit {

  last4: string;
  brand: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPaymentInfo();
  }

  getPaymentInfo() {
    this.http.get<any>('http://localhost:8081/cumulus/order/ChooseCard').subscribe(
      response => {
        this.last4 = response.last4;
        this.brand = response.brand;
        if (this.brand === 'Visa') {
          // Do something
      }
      },
      error => {
        console.log(error);
      }
    );
  }

}
