import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from "axios";
import { Observable } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private baseUrl = 'http://localhost:8081/CUMULUS/event';

  constructor(private http: HttpClient) { }

  public getEvents():Observable<Event[]>{
    return this.http.get<Event[]>(`${this.baseUrl}`);
  }

  addEvent(event: any){
    return this.http.post(`${this.baseUrl}`, event);
  }

  updateEvent(id_event: number, event: any) {
    return this.http.put(`${this.baseUrl}/${id_event}`, event);
  }

  retrieveEvent(id_event: number) {
    return this.http.get(`${this.baseUrl}/${id_event}`);
  }

  deleteEvent(id_event: number){
    return this.http.delete(`${this.baseUrl}/${id_event}`);
  }
}
