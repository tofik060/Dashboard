export interface OrderList {
    [x: string]: any;
    order? : number;
    itemName : string;
    quantity : number;
    productCode : string;
    orderDate : Date;
    orderCancelDate : Date;
    price?: number;
    orderStatus : string;
    actualPrice : number;
}