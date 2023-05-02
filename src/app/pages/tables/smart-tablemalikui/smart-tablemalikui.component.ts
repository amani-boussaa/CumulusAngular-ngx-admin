import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LocalDataSource } from 'ng2-smart-table';
import { CertifService } from '../../../certif.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-tablemalikui.component.html',
  styleUrls: ['./smart-tablemalikui.component.scss'],
})
export class SmartTablemalikuiComponent {
  blobs: any[] = [];
  urls: SafeResourceUrl[] = [];

  source: LocalDataSource = new LocalDataSource([]);
  tableData: any[] = [];

  constructor(
    private certifService: CertifService,
    private sanitizer: DomSanitizer
  ) {
    this.blobs = [];
    this.certifService.getAllCertifs().subscribe((data) => {
      this.tableData = data;
      this.source.load(data);
      for (let index = 0; index < data.length; index++) {
        this.certifService.getFile(data[index].id).subscribe((data) => {
          var file = new Blob([data], { type: 'application/pdf' });
          const fr = new FileReader();
          fr.readAsDataURL(file);
          fr.addEventListener('load', () => {
            this.blobs.push(fr.result);
            const url = this.sanitizer.bypassSecurityTrustResourceUrl(
              fr.result as string
            );
            this.urls.push(url);
          });
        });
      }
    });
  }

  
}
