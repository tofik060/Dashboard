import { Pipe, PipeTransform } from '@angular/core';
import { OrderList } from '../home/home';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(orderList: OrderList[], itemName : string): OrderList[] {
  // //   if(orderList.length === 0 || itemName === ''){
  // //     return orderList;
  // //   }
  // //   const OrderList = [];
  // //   for(const order of orderList){
  // //     if(order['itemName'] === itemName){
  // //       OrderList.push(order);
  // //     }
  // //   }
  // //    return OrderList;
  // return orderList.filter((order) => order.itemName >= itemName);
  // }
  transform(orderList: OrderList[],  quantity: number): OrderList[] {
    return orderList.filter((order) => order.quantity >= quantity);
  }

}
