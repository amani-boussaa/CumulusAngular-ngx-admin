import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'ngx-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  averageMessages: any;
  keywordsData: { keyword: string, count: number }[] = [];
  currentPage = 1;
  itemsPerPage = 5;
  pagedItems: any[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getAverageMessages().subscribe(data => {
      this.averageMessages = data;
      console.log(this.averageMessages);
    });
    this.chatService.getMostCommonKeywords().subscribe((data: { [key: string]: number }) => {
      for (const keyword in data) {
        if (Object.prototype.hasOwnProperty.call(data, keyword)) {
          this.keywordsData.push({ keyword, count: data[keyword] });
        }
      }
      this.onPageChange(1);
      console.log(this.keywordsData);
    });
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.pagedItems = this.keywordsData.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  onPageBoundsCorrection(number: number): void {
    if (number < 1) {
      this.onPageChange(1);
    } else if (number > Math.ceil(this.keywordsData.length / this.itemsPerPage)) {
      this.onPageChange(Math.ceil(this.keywordsData.length / this.itemsPerPage));
    }
  }

  onNextPage(): void {
    const nextPage = this.currentPage + 1;
    this.onPageChange(nextPage);
  }
}
