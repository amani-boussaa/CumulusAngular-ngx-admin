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
  
  HappinesData: { happiness: string, lvl: number }[] = [];

  
  
  currentPage = 1;
  itemsPerPage = 5;
  pagedItems: any[] = [];

  currentPage1 = 1;
  itemsPerPage1 = 5;
  pagedItems1: any[] = [];

  happinessScores = {
    "happy": 1.0,
    "glad": 0.8,
    "joyful": 0.9,
    "sad": -1.0,
    "unhappy": -1.0,
    "miserable": -1.0,
    "angry": -0.8,
    "frustrated": -0.5,
    "annoyed": -0.5,
    "proud": 0.5,
    "grateful": 0.7,
    "excited": 0.9,
    "peaceful": 0.8,
    "relaxed": 0.6,
    "stressed": -0.7,
    "tired": -0.5,
    "sick": -0.9,
    "disgusted": -0.8,
    "fearful": -0.7,
    "nervous": -0.6
  };

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

    /*this.chatService.getUserHappines().subscribe((data: { [key: string]: number }) => {
      for (const happines in data) {
        console.log(happines)
        if (Object.prototype.hasOwnProperty.call(data, happines)) {
          this.HappinesData.push({ happines , lvl: data[happines] });
        }
      }
      this.onPageChange(1);
      console.log(this.HappinesData);
    });*/

    this.chatService.getUserHappines().subscribe((data: { [key: string]: number }) => {
      for (const happiness in data) {
        if (Object.prototype.hasOwnProperty.call(data, happiness)) {
          const score = this.happinessScores[parseFloat(data[happiness].toFixed(1))] ?? 0;
          this.HappinesData.push({ happiness, lvl: data[happiness] });
        }
      }
      this.onPageChange1(1);
      console.log(this.HappinesData);
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

  
  onPageChange1(pageNumber1: number): void {
    this.currentPage1 = pageNumber1;
    this.pagedItems1 = this.HappinesData.slice((this.currentPage1 - 1) * this.itemsPerPage1, this.currentPage1 * this.itemsPerPage1);
  }

  onPageBoundsCorrection1(number: number): void {
    if (number < 1) {
      this.onPageChange1(1);
    } else if (number > Math.ceil(this.HappinesData.length / this.itemsPerPage1)) {
      this.onPageChange1(Math.ceil(this.HappinesData.length / this.itemsPerPage1));
    }
  }

  onNextPage1(): void {
    const nextPage1 = this.currentPage1 + 1;
    this.onPageChange1(nextPage1);
  }
}
