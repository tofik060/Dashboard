import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Component({
  selector: 'app-order-register',
  templateUrl: './order-register.component.html',
  styleUrls: ['./order-register.component.css']
})
export class OrderRegisterComponent implements OnInit {

  orderListForm! : FormGroup;
  id:any
  product: any = {};
  constructor(
    private fb : FormBuilder,
    private dashboardService : DashboardService,
    private router: Router,
    private activated: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ){
    this.orderListForm = this.fb.group({
      itemName:['',Validators.required],
      quantity:[''],
      productCode:['',Validators.required],
      orderDate:['',Validators.required],
      price:['',Validators.required],
      image:[''],
      actualPrice:[''],
      customerName:['',Validators.required],
      customerEmail:['',[Validators.required, Validators.email]],
      customerPhone:['',Validators.required],
      customerAddress:['',Validators.required],
    })
  }

    ngOnInit(): void {
    this.id = this.activated.snapshot.paramMap.get('id');
    this.dashboardService.productId(this.id).subscribe(
      ( response ) => {
        this.product = response;
        this.orderListForm.patchValue(response)
      }
    )
  }

  onSubmit(){
    this.dashboardService.order(this.orderListForm.value).subscribe(
      (response) => {
        this.snackBar.open('Order submitted successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.router.navigate(['/order'])
      },
      (error) => {
        throw error; 
      }
    )
  }
  reset(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Do you want to discard your order?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.orderListForm.reset();
        this.snackBar.open('Order has been cancelled', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
        this.router.navigate(['/products']);
      }
    });
  }
}



