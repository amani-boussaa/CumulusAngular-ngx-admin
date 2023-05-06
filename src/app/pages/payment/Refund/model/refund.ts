import { Order } from "../../Order/model/order";

export class Refund {
    refund_id:String;
    reason:String;
    status:String;
    order: Order;
}
