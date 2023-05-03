import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CertifService } from '../../../certif.service';
import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-smart-tablemalikmail',
  templateUrl: './smart-tablemalikmail.component.html',
  styleUrls: ['./smart-tablemalikmail.component.scss'],
})
export class SmartTablemalikmailComponent {

  toEmail: string;
  subject: string;
  body: string;
  attachment: string = 'C:\Users\amani\Desktop\cumulus.pdf'; // Set the attachment to a static file
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,  private certifService: CertifService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  sendEmail() {
    this.certifService.sendEmailWithAttachment(this.toEmail, this.body, this.subject, this.attachment).subscribe(response => {
      console.log(response); // Handle the response from the server
    }, error => {
      console.error(error); // Handle any errors that occur
    });
  }
}
