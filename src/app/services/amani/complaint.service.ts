import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  private baseUrl = 'http://localhost:8081/CUMULUS/complaints';
  token: any = localStorage.getItem('accessToken')
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  };
  constructor(private http: HttpClient) { }

  createComplaint(complaint: any){
    return this.http.post(`${this.baseUrl}`, complaint, this.httpOptions);
  }

  updateComplaint(id: number, complaint: any) {
    return this.http.put(`${this.baseUrl}/${id}`, complaint, this.httpOptions);
  }

  getComplaintById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`, this.httpOptions);
  }

  getAllComplaints(){
    return this.http.get(`${this.baseUrl}`, this.httpOptions);
  }

  getComplaintsByUser(userId: number){
    return this.http.get(`${this.baseUrl}/user/${userId}`, this.httpOptions);
  }
  deletecomplaint(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`, this.httpOptions)

  }
}
