import { Pipe, PipeTransform } from '@angular/core';
import { OrderList } from './home';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(orderList: OrderList[], searchText: string): OrderList[] {
    if (!orderList || !searchText) {
      return orderList;
    }
    
    const search = searchText.toLowerCase();
    return orderList.filter((order) => {
      return (
        (order['itemName'] && order['itemName'].toString().toLowerCase().includes(search)) ||
        (order['quantity'] && order['quantity'].toString().toLowerCase().includes(search)) ||
        (order['productCode'] && order['productCode'].toString().toLowerCase().includes(search)) ||
        (order['orderDate'] && order['orderDate'].toString().toLowerCase().includes(search)) ||
        (order['productDate'] && order['productDate'].toString().toLowerCase().includes(search)) ||
        (order['price'] && order['price'].toString().toLowerCase().includes(search)) ||
        (order['actualPrice'] && order['actualPrice'].toString().toLowerCase().includes(search)) ||
        (order['orderCancelDate'] && order['orderCancelDate'].toString().toLowerCase().includes(search)) ||
        (order['orderStatus'] && order['orderStatus'].toString().toLowerCase().includes(search))
      );
    });
  }

}
