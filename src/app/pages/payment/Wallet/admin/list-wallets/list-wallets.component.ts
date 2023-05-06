import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../service/wallet.service';  
import { Wallet } from '../../model/wallet';  
import { Observable,Subject } from "rxjs";  
  
import {FormControl,FormGroup,Validators} from '@angular/forms';  

@Component({
  selector: 'ngx-list-wallets',
  templateUrl: './list-wallets.component.html',
  styleUrls: ['./list-wallets.component.scss']
})
export class ListWalletsComponent implements OnInit {

  constructor(private walletservice:WalletService) { }  
  
  walletsArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  wallets: Observable<Wallet[]>;  
  wallet : Wallet=new Wallet();  
  deleteMessage=false;  
  walletlist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.walletservice.getWalletList().subscribe(data =>{  
    this.wallets =data;  
    this.dtTrigger.next();  
    })  
  }  
    
  deleteWallet(id: String) {  
    this.walletservice.deleteWallet(id)  
      .subscribe(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.walletservice.getWalletList().subscribe(data =>{  
            this.wallets =data  
            })  
        },  
        error => console.log(error));  
  }  
  
  updateWallet(id: String){  
    this.walletservice.getWallet(id)  
      .subscribe(  
        data => {  
          this.walletlist=data             
        },  
        error => console.log(error));  
  }  
  
  walletupdateform=new FormGroup({  
    wallet_id:new FormControl(),  
    balance:new FormControl(),  
    coins:new FormControl(),  
    currency:new FormControl()  ,
    payment_method:new FormControl(),
    subscription:new FormControl()
  });  
  
  updateWall(updwall){  
    this.wallet=new Wallet();   
   this.wallet.wallet_id=this.WalletId.value;  
   this.wallet.balance=this.WalletBalance.value;  
   this.wallet.coins=this.WalletCoins.value;  
   this.wallet.currency=this.WalletCurrency.value;  
   this.wallet.payment_method=this.Wallet_Payment_method.value; 
   this.wallet.subscription=this.WalletSubscription.value; 
   //console.log(this.WalletBranch.value);  
     
  
   this.walletservice.updateWallet(this.wallet).subscribe(  
    data => {       
      this.isupdated=true;  
      this.walletservice.getWalletList().subscribe(data =>{  
        this.wallets =data  
        })  
    },  
    error => console.log(error));  
  }  
  
  get Wallet_Payment_method(){  
    return this.walletupdateform.get('payment_method');  
  }
  get WalletSubscription(){  
    return this.walletupdateform.get('subscription');  
  }
  get WalletCurrency(){  
    return this.walletupdateform.get('currency');  
  }  
  
  get WalletBalance(){  
    return this.walletupdateform.get('balance');  
  }  
  
  get WalletCoins(){  
    return this.walletupdateform.get('coins');  
  }  
  
  get WalletId(){  
    return this.walletupdateform.get('wallet_id');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  

}
