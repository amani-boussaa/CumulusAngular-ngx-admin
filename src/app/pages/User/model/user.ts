import { Order } from "../../payment/Order/model/order";
import { Wallet } from "../../payment/Wallet/model/wallet";


export class User {
    user_id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    orders: Order[];
    wallet: Wallet;
  }
  