import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-register',
  templateUrl: './order-register.component.html',
  styleUrls: ['./order-register.component.css']
})
export class OrderRegisterComponent implements OnInit {

  orderListForm! : FormGroup;
  id:any
  constructor(
    private fb : FormBuilder,
    private dashboardService : DashboardService,
    private router: Router,
    private activated: ActivatedRoute
  ){
    this.orderListForm = this.fb.group({
      itemName:['',Validators.required],
      quantity:[''],
      productCode:['',Validators.required],
      orderDate:[''],
      price:['',Validators.required],
    })
  }

    ngOnInit(): void {
    this.id = this.activated.snapshot.paramMap.get('id');
    this.dashboardService.orderId(this.id).subscribe(
      ( response ) => {
        this.orderListForm.patchValue(response)
      }
    )
  }

  onSubmit(){

    this.dashboardService.orderUpdateId(this.id,this.orderListForm.value).subscribe(
      (response) => {
        console.log("Order Update Successfully!",response);
        this.router.navigate(['/order'])
      },
      (error) => {
        console.error(error) 
      }
    )
    this.dashboardService.product(this.orderListForm.value).subscribe(
      (response) => {
        console.log("Order Add Successfully!",response);
        this.router.navigate(['/order'])
      },
      (error) => {
        console.error(error)
      }
    )
  }
  reset(){
    //this.orderListForm?.reset();
    if(window.confirm("Do You Want to Cancel Order")){
      this.orderListForm.reset();
      this.router.navigate(['/products'])
    }
  }
}



