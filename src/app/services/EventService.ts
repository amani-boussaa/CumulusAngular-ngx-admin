import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private baseUrl = 'http://localhost:8081/CUMULUS/event';

  constructor(private http: HttpClient) { }

  addEvent(event: any){
    return this.http.post(`${this.baseUrl}`, event);
  }

  updateEvent(id_event: number, event: any) {
    return this.http.put(`${this.baseUrl}/${id_event}`, event);
  }

  retrieveEvent(id_event: number) {
    return this.http.get(`${this.baseUrl}/${id_event}`);
  }

  retrieveAllEvent(){

    axios.get('http://localhost:8081/CUMULUS/api/event/retrieveAllEvent')
    .then(response => {
     
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });

    return {};
   
  }

  deleteEvent(id_event: number){
    return this.http.delete(`${this.baseUrl}/${id_event}`);
  }
}
