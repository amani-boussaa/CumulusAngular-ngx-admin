import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../service/wallet.service';  
import { Wallet } from '../../model/wallet';  
import { Observable,Subject } from "rxjs";  
  
import {FormControl,FormGroup,Validators} from '@angular/forms';  

@Component({
  selector: 'ngx-wallet-details',
  templateUrl: './wallet-details.component.html',
  styleUrls: ['./wallet-details.component.scss']
})
export class WalletDetailsComponent implements OnInit {

  constructor(private walletservice:WalletService) { }  
  
  walletsArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  wallets: Observable<Wallet[]>;  
  wallet : Wallet=new Wallet();  
  walletlist:any;  
   
  
  ngOnInit() {  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.walletservice.getWalletOfUser().subscribe(data =>{  
    this.wallet =data;  
    this.dtTrigger.next();  
    })  
  }  
     

}
