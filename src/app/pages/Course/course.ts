import { Order } from "../payment/Order/model/order";

export class Course {
    id: number;
    name: string;
    description: string;
    instructor: string;
    price: number;
    orders: Order[];
  }
  