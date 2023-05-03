import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private Threaddata: any;

  constructor() { }

  setThreadData(data: any) {
    this.Threaddata = data;
  }

  getThreadData(): any {
    return this.Threaddata;
  }
}