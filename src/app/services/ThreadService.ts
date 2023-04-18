import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from "axios";
@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  private baseUrl = '/api/thread';

  constructor(private http: HttpClient) { }

  createThread(thread: any){
    return this.http.post(`${this.baseUrl}`, thread);
  }

  updateThread(id: number, thread: any) {
    return this.http.put(`${this.baseUrl}/${id}`, thread);
  }

  getThreadById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllthreads(){

    axios.get('http://localhost:8081/CUMULUS/api/thread/getAllThreads')
    .then(response => {
     
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });

    return {};
   
  }

  getThreadByUser(userId: number){
    return this.http.get(`${this.baseUrl}/user/${userId}`);
  }
}
