import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certif } from './certif';

@Injectable({
  providedIn: 'root'
})
export class CertifService {
  
  private baseUrl = 'http://localhost:8081/CUMULUS/certifs'; 
  certs: any[];
  constructor(private http: HttpClient) { }

  getCertifById(id: number): Observable<Certif> {
    return this.http.get<Certif>(`${this.baseUrl}/${id}`);
  }

  getAllCertifs(): Observable<Certif[]> {
    return this.http.get<Certif[]>(`${this.baseUrl}/getAllCertifs`);
  }


  createCertif(certif: any) {
    return this.http.post<any>(`${this.baseUrl}/createCertif`, certif);
  }

  deleteCertif(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  updateCertif(id: number, certif: any) {
    return this.http.put<any>(`${this.baseUrl}/updateCertif/${id}`, certif);
  }

  assignCertifToUser(numCertif: string, numUser: string) {
    return this.http.post<any>(`${this.baseUrl}/assignCertifToUser`, { numCertif, numUser });
  }
}



