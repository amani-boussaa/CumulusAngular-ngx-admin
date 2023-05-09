import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Order } from '../../../Order/model/order';
import { OrdersService } from '../../../Order/service/orders.service';
import { NbWindowService, NbWindowRef } from '@nebular/theme';
import { ChooseCardComponent } from '../choose-card/choose-card.component';
import { WalletService } from '../../service/wallet.service';
import { Wallet } from '../../model/wallet';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { AuthService } from '../../../../../services/login/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ngx-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {

  successMessageVoucher: string | null = null;
  successMessageCoins: string | null = null;
  errorMessage: string | null = null;
  successMessageBuyVoucher: string | null = null;
  ErrorMessageBuyVoucher: string | null = null;
  successMessageSubscription: string | null = null;
  ErrorMessageSubscription: string | null = null;
  MessageInProcess: string | null = null;
  MessageInProcessCoins: string | null = null;
  MessageInProcessVoucher: string | null = null;
  MessageAlreadySubscribed: string | null = null;



  wallet: Wallet;
 id:any

  constructor(private ordersService: OrdersService,private walletservice: WalletService
     ,private windowService: NbWindowService,private http: HttpClient,private authservice : AuthService,
     private toastrService:ToastrService) {}

  ngOnInit() {
    this.walletservice.getWalletOfUser().subscribe(
      wallet => {
        this.wallet = wallet;
        console.log(this.wallet);
      },
      error => {
        console.log('An error occurred while retrieving wallet information.');
      }
    );
  }

  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('childRef') childRef: NbWindowFormComponentGiftCard;
  @ViewChild('childRef') childRef_voucher: NbWindowFormComponentVoucher;


  openWindow(amount: number, Coins: number, type: string) {
    this.windowService.open(NbWindowFormComponent, {
      title: 'Warning!',
      context: {
        submitFunction: () => this.BuyCoins(amount, Coins, type),
        Coins: Coins,
      },
    });
  }

  openWindowGiftCard() {
    this.windowService.open(NbWindowFormComponentGiftCard, {
      title: 'Redeem a Gift Card',
      context: {
        submitFunction: () => this.childRef.RedeemGiftCard()
      },
    });
  }

  openWindowVoucher() {
    this.windowService.open(NbWindowFormComponentVoucher, {
      title: 'Redeem an Exam Voucher',
      context: {
        submitFunction: () => this.childRef_voucher.RedeemVoucher()
      },
    });
  }

  openWindowChooseCard() {
    this.windowService.open(ChooseCardComponent, {
      title: 'Choose a form of Payment',
    });
  }


  BuyCoins(amount: number,Coins: number,type: string) {
    this.toastrService.info('Please wait a moment', 'Info');

    const neworder: Order = {
      amount: amount,
      type: type, // set the default order type to "Coins"
      order_id: '',
      currency: 'usd',
      status: '',
      date_created: null,
      date_updated: null,
      user: null,
      course:null,
    };
    this.ordersService.createOrder(neworder,Coins).subscribe(
      data => {
        console.log('Order created:', data);
        if (type=='Coins'){
          this.toastrService.success('Coins have been added to your Account', 'Success');
        }
      },
      error => console.log('Error:', error)
    );
  }

 addMessageAlreadySubbed(){
  // this.MessageAlreadySubscribed = 'You are already subscribed !';
  this.toastrService.info('You are already subscribed', 'Info');

 }

  addSubscriptionOrder(subscriptionType: string, price: number) {
    this.toastrService.info('Please wait a moment', 'Info');
    let id = sessionStorage.getItem('id')
    const url = `${environment.urlBackend}` +'order/addSubscriptionOrder/'+id;
    const order = {}; // Empty object since the body is okay to be empty

    this.http.post(url + `?subscription_type=${subscriptionType}&price=${price}`, order).subscribe(
      () => {
        console.log('Subscription order added successfully.');
        this.toastrService.success('Thank you for your subscription', 'Success');

        // Add any additional logic or notifications here
      },
      (error) => {
        console.error('Error adding subscription order:', error);
        this.toastrService.error('Error adding Subscription', 'Error');

        // Handle the error as needed
      }
    );
  }

  // Buying Exam Voucher function
  BuyVoucher(voucher_code: string) {
    this.toastrService.info('Please wait a moment', 'Info');

    this.ordersService.BuyVoucher(voucher_code).subscribe(
      () => {
          console.log('Voucher created successfully');
          this.toastrService.success('Exam Voucher purchased successfully', 'Success');
        // Perform any additional actions or show success message
      },
      (error) => {
        console.log('Failed to create voucher:', error);
          this.toastrService.error('Error buying Voucher', 'Error');
        // Handle error scenario and show error message
      }
    );
  }
}

// Confirm Payment for Coins/Voucher

@Component({
  template: `
    <div>
      <div *ngIf="Coins !== 0">
      <p>Are you sure you want to buy {{ Coins }} Coins?</p>
      </div>
      <div *ngIf="Coins === 0">
      <p>Are you sure you want to buy this Voucher?</p>
      </div>
                            <button nbButton (click)="submit()" status="success">Yes</button>
      <button nbButton (click)="cancel()" status="danger">No</button>
  </div>
  `,
})
export class NbWindowFormComponent {
  submitFunction: Function;
  Coins: number;


  constructor(public windowRef: NbWindowRef) {}

  ngOnInit() {
    this.submitFunction = this.windowRef.config.context['submitFunction'];
    this.Coins = this.windowRef.config.context['Coins'];
  }

  submit() {
    // Call the submitFunction passed in the context
    this.submitFunction(/* pass any necessary arguments here */);
    this.windowRef.close();
  }

  cancel() {
    this.windowRef.close();
  }
}


// Redeem Gift card Window

@Component({
  template: `
    <div>
                    <input [type]="getInputType()" nbInput placeholder="Enter gift card code" [(ngModel)]="giftCardCode">
         <button nbSuffix nbButton ghost (click)="toggleShowPassword()">
           <nb-icon [icon]="showPassword ? 'eye-outline' : 'eye-off-2-outline'"
                    pack="eva"
                    [attr.aria-label]="showPassword ? 'hide password' : 'show password'">
           </nb-icon>
         </button>
      <br>
      <br>
                        <button nbButton (click)="submit()" status="success">Confirm</button>
      <button nbButton (click)="cancel()" status="danger">Cancel</button>
    </div>
  `,
})
export class NbWindowFormComponentGiftCard {
  giftCardCode: string;
  successMessageGiftCard: string | null = null;
  ErrorMessageGiftCard: string | null = null;

  constructor(public windowRef: NbWindowRef,private ordersService: OrdersService,private toastrService:ToastrService) {}

  showPassword = true;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  RedeemGiftCard()
  {
    this.ordersService.redeemGiftCard(this.giftCardCode).subscribe(
      (response) => {
        // Gift card redeemed successfully
        console.log(response);
          this.toastrService.success('Gift Card Redeemed successfully', 'Success');
      },
      (error) => {
        if (error.status === 404) {
          // Gift card not found
          console.log("Gift card not found");
          this.toastrService.error('Incorrect Code', 'Error');
        } else if (error.status === 409) {
          // Gift card already used
          console.log("Gift card is already used");
          // alert("This Code has already been used !!");
          this.toastrService.error('This Code has already been used', 'Error');

        } else {
          // Other error occurred
          console.log("Something went wrong");
        }
      }
    );
  }

  submit() {

    // Handle form submission here
    // if (this.giftCardCode === '123') {

    //   console.log('Gift card code is valid');
    // } else {
    //   console.log('Gift card code is invalid');
    // }
    this.RedeemGiftCard();

    this.windowRef.close();
  }

  cancel() {
    this.windowRef.close();
  }
}

// Redeem Exam Voucher Window

@Component({
  template: `
   <div>
                    <input [type]="getInputType()" nbInput placeholder="Enter Exam Voucher code" [(ngModel)]="VoucherCode">
         <button nbSuffix nbButton ghost (click)="toggleShowPassword()">
           <nb-icon [icon]="showPassword ? 'eye-outline' : 'eye-off-2-outline'"
                    pack="eva"
                    [attr.aria-label]="showPassword ? 'hide password' : 'show password'">
           </nb-icon>
         </button>
      <br>
      <br>
                        <button nbButton (click)="submit()" status="success">Confirm</button>
      <button nbButton (click)="cancel()" status="danger">Cancel</button>
    </div>
  `,
})
export class NbWindowFormComponentVoucher {
  VoucherCode: string;
  successMessageVoucher: string | null = null;
  ErrorMessageVoucher: string | null = null;

  constructor(public windowRef: NbWindowRef,private ordersService: OrdersService,private toastrService:ToastrService) {}

  showPassword = true;

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  RedeemVoucher()
  {
    this.ordersService.redeemVoucher(this.VoucherCode).subscribe(
      (response) => {
        // Exam Voucher redeemed successfully
        console.log(response);
          // alert("Exam Voucher Redeemed successfully !");
          this.toastrService.success('Exam Voucher Redeemed successfully', 'Success');
      },
      (error) => {
        if (error.status === 404) {
          // Exam Voucher not found
          console.log("Exam Voucher not found");
          // alert("Incorrect Code !");
          this.toastrService.error('Incorrect Code', 'Error');
        } else if (error.status === 409) {
          // Exam Voucher already used
          console.log("Exam Voucher is already used");
          // alert("This Code has already been used !!");
          this.toastrService.error('This Code has already been used', 'Error');
        } else {
          // Other error occurred
          console.log("Something went wrong");
          alert("Something went wrong !!");
        }
      }
    );
  }

  submit() {

    // Handle form submission here
    // if (this.giftCardCode === '123') {

    //   console.log('Gift card code is valid');
    // } else {
    //   console.log('Gift card code is invalid');
    // }
    this.RedeemVoucher();

    this.windowRef.close();
  }

  cancel() {
    this.windowRef.close();
  }
}
