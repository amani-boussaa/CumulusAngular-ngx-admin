import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class OrdersService {
    private baseUrl = 'http://localhost:8081/cumulus/order/';  
    constructor(private http: HttpClient) { }

    getOrderList(): Observable<any> {  
        return this.http.get(`${this.baseUrl}`+'getAllOrders');  
      }  
      
      createOrder(Order: object): Observable<object> {  
        return this.http.post(`${this.baseUrl}`+'addOrder', Order);  
      }  
      
      deleteOrder(order_id: String): Observable<any> {  
        return this.http.delete(`${this.baseUrl}deleteOrder/${order_id}`, { responseType: 'text' });  
      }  
      
      getOrder(order_id: String): Observable<Object> {  
        return this.http.get(`${this.baseUrl}Order/${order_id}`);  
      }  
      
      updateOrder(order_id: String, value: any): Observable<Object> {  
        return this.http.put(`${this.baseUrl}updateOrder/${order_id}`, value);  
      }   

}

  