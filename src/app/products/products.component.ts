import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  orderForm : any;
  user0 : any;
  user1 : any;
  user2 : any;
  user3 : any;
  user4 : any;
  user5 : any;
  user6 : any;
  user7 : any;
  user8 : any;
  user9 : any;

  constructor(private dashboardService : DashboardService, private router : Router) {
 
   }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(!token){
      console.error("Failed to fatch product ")
      this.router.navigate(['/'])
    }
    if(token){
      this.dashboardService.orderData0.subscribe((res) =>{
        this.user0 = res
      // console.log("Order Data", this.user0)
      });
      this.dashboardService.orderData1.subscribe((res) =>{
        this.user1 = res
       //console.log("Order Data", this.user1)
      });
      this.dashboardService.orderData2.subscribe((res) =>{
        this.user2 = res
       //console.log("Order Data", this.user2)
      });
      this.dashboardService.orderData3.subscribe((res) =>{
        this.user3 = res
       //console.log("Order Data", this.user3)
      });
      this.dashboardService.orderData4.subscribe((res) =>{
        this.user4 = res
       //console.log("Order Data", this.user4)
      });
      this.dashboardService.orderData5.subscribe((res) =>{
        this.user5 = res
      // console.log("Order Data", this.user5)
      });
      this.dashboardService.orderData6.subscribe((res) =>{
        this.user6 = res
       //console.log("Order Data", this.user6)
      });
      this.dashboardService.orderData7.subscribe((res) =>{
        this.user7 = res
      // console.log("Order Data", this.user7)
      });
      this.dashboardService.orderData8.subscribe((res) =>{
        this.user8 = res
      // console.log("Order Data", this.user8)
      });
      this.dashboardService.orderData9.subscribe((res) =>{
        this.user9 = res
       //console.log("Order Data", this.user9)
      });
  
  
      this.dashboardService.orderall();
    }
  

  
      // this.dashboardService.orderAll()
      // .subscribe(
      //   (response) => {
      //     console.log("Order All : ", response);
      //     this.orderForm = response;
      //   }
      // )
  }
}
