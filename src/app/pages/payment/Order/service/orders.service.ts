import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
    providedIn: 'root'
  })
  export class OrdersService {
    private baseUrl = 'http://localhost:8081/cumulus/order/';  
    constructor(private http: HttpClient) { }

    getOrderList(): Observable<any> {  
        return this.http.get(`${this.baseUrl}`+'getAllOrders');  
      }  

      getUserOrderList(user_id: number): Observable<any> {  
        return this.http.get(`${this.baseUrl}getAllOrdersOfUser/${user_id}`);  
      }

      getAllOrdersWithCourse(): Observable<any> {  
        return this.http.get(`${this.baseUrl}`+'getAllOrdersWithCourse');  
      }  
      
      createOrder(order: Order, coinsBuy: number): Observable<Order> {
        const url = `${this.baseUrl}addOrder?CoinsBuy=${coinsBuy}`;
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
        return this.http.put(`${this.baseUrl}RedeemGiftCard?code=${code}`, null);
      }
      redeemVoucher(code: string): Observable<any> {
        return this.http.put(`${this.baseUrl}RedeemVoucher?code=${code}`, null);
      }
      BuyVoucher(name: string) {
        return this.http.post(`${this.baseUrl}createVoucher?name=${name}`,null);
      }

}

  