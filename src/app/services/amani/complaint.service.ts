import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  //private baseUrl = 'http://localhost:8081/CUMULUS/complaints';
  token: any = localStorage.getItem('accessToken')
  private url2 = `${environment.urlBackend}` + 'complaints';
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  };
  constructor(private http: HttpClient) { }

  createComplaint(complaint: any){
    //return this.http.post(`${this.baseUrl}`, complaint, this.httpOptions);
    return this.http.post(`${this.url2}`, complaint, this.httpOptions);
  }

  updateComplaint(id: number, complaint: any) {
    //return this.http.put(`${this.baseUrl}/${id}`, complaint, this.httpOptions);
    return this.http.put(`${this.url2}/${id}`, complaint, this.httpOptions);

  }

  getComplaintById(id: number) {
    return this.http.get(`${this.url2}/${id}`, this.httpOptions);
  }

  getAllComplaints(){
    return this.http.get(`${this.url2}`, this.httpOptions);
  }

  getComplaintsByUser(userId: number){
    return this.http.get(`${this.url2}/user/${userId}`, this.httpOptions);
  }
  deletecomplaint(id: any) {
    return this.http.delete(`${this.url2}/${id}`, this.httpOptions)

  }
}
