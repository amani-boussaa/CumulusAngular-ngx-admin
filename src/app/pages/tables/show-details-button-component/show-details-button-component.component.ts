import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-show-details-button-component',
  templateUrl: './show-details-button-component.component.html',
  styleUrls: ['./show-details-button-component.component.scss']
})
export class ShowDetailsButtonComponentComponent  implements ViewCell {
  value: any;
  rowData: any;
  constructor(private router:Router) { }
  onClick() {
    let id_user = this.rowData.id
    // Implement your details functionality here
    console.log('Details button clicked for row:', this.rowData);
    this.router.navigate(['/pages/forms/detailuser/'+id_user]);
  }

  // onClick() {
  //   this.router.navigate(['/pages/forms/profile']);
  // }
}
