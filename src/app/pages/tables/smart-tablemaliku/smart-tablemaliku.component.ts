import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LocalDataSource } from 'ng2-smart-table';
import { CourseService } from '../../../course.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-tablemaliku.component.html',
  styleUrls: ['./smart-tablemaliku.component.scss'],
})
export class SmartTablemalikuComponent {
  blobs: any[] = [];
  urls: SafeResourceUrl[] = [];

  source: LocalDataSource = new LocalDataSource([]);
  tableData: any[] = [];

  constructor(
    private courseService: CourseService,
    private sanitizer: DomSanitizer
  ) {
    this.blobs = [];
    this.courseService.getAllCourses().subscribe((data) => {
      this.tableData = data;
      this.source.load(data);
      for (let index = 0; index < data.length; index++) {
        this.courseService.getFile(data[index].id).subscribe((data) => {
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
