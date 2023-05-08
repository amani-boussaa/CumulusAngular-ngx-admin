import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { RegistrationService } from '../../../service/registration.service';
import { RegistrationModel } from '../../../entity/registration.model';
import { FormGroup } from '@angular/forms';
import {utils, writeFile} from "xlsx";
import jsPDF from 'jspdf';

@Component({
  selector: 'ngx-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrations :RegistrationModel[] = [];
  constructor(private registrationService: RegistrationService) { }
  @ViewChild('dataToExport',{static:false}) el!:ElementRef
  ngOnInit(): void {
    this.registrationService.getRegistrations().subscribe(
      (data)=>this.registrations = data
    );
  }

  public deleteRegistration(idRegistration:number):void{
      this.registrationService.deleteRegistration(idRegistration).subscribe(
        res=>this.ngOnInit()
      )
  }

  public generatePdf():void{
    let pdf = new jsPDF();
    pdf.html(this.el.nativeElement,{
      callback:(pdf) =>{
        pdf.save("list-enregistrement.pdf");
      }
    })
  }

  public exportCSV():void{
    const headings = [["Nom évènement", "Date enregistrement"]];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws,headings);
    utils.sheet_add_json(ws, this.registrations, {
      origin: 'A2',
      skipHeader:true
    })
    utils.book_append_sheet(wb, ws, "Registration");
    writeFile(wb, "list-enregistrement.xlsx");

  }

  

}
