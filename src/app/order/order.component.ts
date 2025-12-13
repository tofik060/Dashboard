import { Component, Input, OnInit } from '@angular/core';
import { OrderList } from '../home/home';
import { FormControl } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../order-register/confirm-dialog.component';
import { CustomerDetailsDialogComponent } from './customer-details-dialog.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {

  quantity: number = 0;

  quantityFilter = new FormControl(0);

  orderList: any = [];
  originalOrderList: any = [];

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(!token){
      this.router.navigate(['/'])
    }
    if(token){
      this.dashboardService.orderAll()
      .subscribe(
        (res) => {
          this.orderList = res;
          this.originalOrderList = res;
        }
      )
    }
      
  }

  filteredData: OrderList[] = [];
  searchQuery = '';
  itemName: string = '';
  searchVisible = true; //false

  search() {
    if (this.searchQuery === '') {
      this.orderList = [...this.originalOrderList];
    } else {
      this.orderList = this.originalOrderList.filter((order: { itemName: string; productCode?: string; orderDate?: string }) =>
        order.itemName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        order.productCode?.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        order.orderDate?.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  toggleSearch() {
    this.searchVisible = this.searchVisible;
  }

  onApprove(id: string, order: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Do you want to approve this order?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.dashboardService.orderUpdateId(id, {orderStatus: order}).subscribe(
          (response) => {
            this.router.navigate(['/order'])
            window.location.reload();
          },
          (error) => {
            throw error;
          }
        )
      }
    });
  }

  getStatusClass(status: string): string {
    const statusLower = status?.toLowerCase() || '';
    if (statusLower === 'pending') {
      return 'status-pending';
    } else if (statusLower === 'cancelled' || statusLower === 'canceled') {
      return 'status-cancelled';
    } else if (statusLower === 'completed') {
      return 'status-completed';
    }
    return 'status-pending';
  }

  customerView(id: string) {
    const order = this.orderList.find((order: any) => order._id === id);
    if (order) {
      const dialogRef = this.dialog.open(CustomerDetailsDialogComponent, {
        width: '500px',
        data: {
          customerName: order.customerName,
          customerEmail: order.customerEmail,
          customerPhone: order.customerPhone,
          customerAddress: order.customerAddress
        }
      });
    }
  }
}
