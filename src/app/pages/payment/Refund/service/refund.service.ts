import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class RefundService {
    private baseUrl = 'http://localhost:8081/cumulus/refund/';  
    constructor(private http: HttpClient) { }

    getRefundList(): Observable<any> {  
        return this.http.get(`${this.baseUrl}`+'getRefunds');  
      }  
      
      createRefund(Refund: object,order_id: String): Observable<object> {  
        return this.http.post(`${this.baseUrl}addRefund/${order_id}`, Refund);  
      }  
      
      deleteRefund(refund_id: String): Observable<any> {  
        return this.http.delete(`${this.baseUrl}deleteRefund/${refund_id}`, { responseType: 'text' });  
      }  
      
      getRefund(refund_id: String): Observable<any> {  
        return this.http.get(`${this.baseUrl}retrieveRefund/${refund_id}`);  
      }  
      
      updateRefund(refund_id: String, value: any): Observable<object> {  
        return this.http.put(`${this.baseUrl}updateRefund/${refund_id}`, value);  
      }   

}

  