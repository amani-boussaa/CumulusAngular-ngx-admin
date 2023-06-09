import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class WalletService {
    private baseUrl = `${environment.urlBackend}` +'wallet/';
    constructor(private http: HttpClient) { }

    getWalletList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`+'getAllWallets');
      }
      getWalletOfUser(): Observable<any> {
        let id = sessionStorage.getItem('id')
        return this.http.get(`${this.baseUrl}`+'getWalletOfUser/'+id);
      }

      createWallet(Wallet: object): Observable<object> {
        let id = sessionStorage.getItem('id')
        return this.http.post(`${this.baseUrl}`+'addWallet/'+id, Wallet);
      }

      deleteWallet(wallet_id: String): Observable<any> {
        return this.http.delete(`${this.baseUrl}deleteWallet/${wallet_id}`, { responseType: 'text' });
      }

      getWallet(wallet_id: String): Observable<Object> {
        return this.http.get(`${this.baseUrl}Wallet/${wallet_id}`);
      }

      updateWallet(Wallet: object): Observable<object> {
        return this.http.post(`${this.baseUrl}`+'updateWallet', Wallet);
      }

      AddPaymentMethod(Wallet: object): Observable<object> {
        let id = sessionStorage.getItem('id')
        return this.http.post(`${this.baseUrl}`+'AddPaymentMethod/'+id, Wallet);
      }

      getSubscriptionStatistics(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}`+'subscription/statistics');
      }

}

