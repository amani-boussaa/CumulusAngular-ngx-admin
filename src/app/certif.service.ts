import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certif } from './certif';

@Injectable({
  providedIn: 'root'
})
export class CertifService {
  private certifService: CertifService;
  pdfUrl: string;
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

  uploadFile(id: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.baseUrl}/${id}/file`, formData);
  }



  getFile(id: number): Observable<Blob> {
    const url = `${this.baseUrl}/getblobfile/${id}`;
    // console.log(url)
    // return this.http.get<Blob>(url, { responseType: 'blob' });
    return this.http.get(url, { responseType: 'blob' });

  }
  getPdf(id: number): void {
    this.certifService.getFile(id).subscribe(blob => {
      this.pdfUrl = URL.createObjectURL(blob);
    });
  }


  sendEmailWithAttachment(toEmail: string, body: string, subject: string, attachment: string): Observable<any> {
    const formData = new FormData();
    formData.append('toEmail', toEmail);
    formData.append('body', body);
    formData.append('subject', subject);
    formData.append('attachment', attachment);
    return this.http.post<any>('http://localhost:8081/CUMULUS/certifs/sendEmailWithAttachment', formData);
    
}


}



