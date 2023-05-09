import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { environment } from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class OrdersService {
    private baseUrl = `${environment.urlBackend}` + 'order/';  
    constructor(private http: HttpClient) { }

    getOrderList(): Observable<any> {  
        return this.http.get(`${this.baseUrl}`+'getAllOrders');  
      }  

      getUserOrderList(): Observable<any> {  
        let id = sessionStorage.getItem('id')
        return this.http.get(`${this.baseUrl}getAllOrdersOfUser/${id}`);  
      }

      getAllOrdersWithCourse(): Observable<any> {  
        return this.http.get(`${this.baseUrl}`+'getAllOrdersWithCourse');  
      }  
      
      createOrder(order: Order, coinsBuy: number): Observable<Order> {
        let id = sessionStorage.getItem('id')
        const url = `${this.baseUrl}addOrder/`+id+`?CoinsBuy=${coinsBuy}`;
        return this.http.post<Order>(url, order);
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

      redeemGiftCard(code: string): Observable<any> {
        let id = sessionStorage.getItem('id')
        return this.http.put(`${this.baseUrl}RedeemGiftCard/`+id+`?code=${code}`, null);
      }
      redeemVoucher(code: string): Observable<any> {
        let id = sessionStorage.getItem('id')
        return this.http.put(`${this.baseUrl}RedeemVoucher/`+id+`?code=${code}`, null);
      }
      BuyVoucher(name: string) {
        let id = sessionStorage.getItem('id')
        return this.http.post(`${this.baseUrl}createVoucher/`+id+`?name=${name}`,null);
      }

}

  