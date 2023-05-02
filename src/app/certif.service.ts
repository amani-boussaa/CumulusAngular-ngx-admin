import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certif } from './certif';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertifService {
  private certifService: CertifService;
  pdfUrl: string;

  certs: any[];
  constructor(private http: HttpClient) { }

  getCertifById(id: number): Observable<Certif> {
    return this.http.get<Certif>(`${environment.urlBackend}`+`${id}`);
  }

  getAllCertifs(): Observable<Certif[]> {
    return this.http.get<Certif[]>(`${environment.urlBackend}`+`api/certifs/getAllCertifs`);
  }


  createCertif(certif: any) {
    return this.http.post<any>(`${environment.urlBackend}`+`api/certifs/createCertif`, certif);
  }

  deleteCertif(id: number): Observable<any> {
    return this.http.delete(`${environment.urlBackend}`+`api/certifs/delete/${id}`);
  }

  updateCertif(id: number, certif: any) {
    return this.http.put<any>(`${environment.urlBackend}`+`api/certifs/updateCertif/${id}`, certif);
  }



  uploadFile(id: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${environment.urlBackend}`+`api/certifs/${id}/file`, formData);
  }



  getFile(id: number): Observable<Blob> {
    const url = `${environment.urlBackend}`+`api/certifs/getblobfile/${id}`;
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
    return this.http.post<any>(`${environment.urlBackend}`+'api/certifs/sendEmailWithAttachment', formData);
    
}


}



