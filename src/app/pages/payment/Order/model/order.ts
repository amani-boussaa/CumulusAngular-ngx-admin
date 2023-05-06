import { User } from "../../../User/model/user";

export class Order {
    order_id:String;
    amount:number;
    currency:String;
    type:String;
    status:String
    date_created:Date;
    date_updated:Date;
    user: User;
}
