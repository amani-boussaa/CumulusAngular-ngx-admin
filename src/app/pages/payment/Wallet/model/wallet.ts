import { User } from "../../../User/model/user";

export class Wallet {
    wallet_id:String;  
    balance:number;  
    coins:number;  
    currency:String;
    payment_method:String;
    subscription:String;
    user: User;
}
