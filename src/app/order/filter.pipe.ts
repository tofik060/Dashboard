import { Pipe, PipeTransform } from '@angular/core';
import { OrderList } from '../home/home';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(orderList: OrderList[],  quantity: number): OrderList[] {
    return orderList.filter((order) => order.quantity >= quantity);
  }

}
