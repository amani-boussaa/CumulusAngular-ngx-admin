import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  private baseUrl = '/api/complaints';

  constructor(private http: HttpClient) { }

  createComplaint(complaint: any){
    return this.http.post(`${this.baseUrl}`, complaint);
  }

  updateComplaint(id: number, complaint: any) {
    return this.http.put(`${this.baseUrl}/${id}`, complaint);
  }

  getComplaintById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllComplaints(){
    return this.http.get(`${this.baseUrl}`);
  }

  getComplaintsByUser(userId: number){
    return this.http.get(`${this.baseUrl}/user/${userId}`);
  }
}
