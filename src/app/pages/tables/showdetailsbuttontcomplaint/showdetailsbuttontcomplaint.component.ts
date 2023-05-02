import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-showdetailsbuttontcomplaint',
  templateUrl: './showdetailsbuttontcomplaint.component.html',
  styleUrls: ['./showdetailsbuttontcomplaint.component.scss']
})
export class ShowdetailsbuttontcomplaintComponent implements ViewCell {
  value: any;
  rowData: any;
  constructor(private router:Router) { }
  onClick() {
    let id_complaint = this.rowData.id
    // Implement your details functionality here
    this.router.navigate(['/pages/forms/detailcomplaint/'+id_complaint]);
  }

}
