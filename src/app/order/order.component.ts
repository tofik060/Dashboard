import { Component, Input, OnInit } from '@angular/core';
import { OrderList } from '../home/home';
import { FormControl } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  //itemName: any;
  //@Input() orders : OrderList[] = [] ;
  // orderList: OrderList[] = [{
  //   order: 1,
  //   itemName: "realme narzo N53 ",
  //   quantity: 1,
  //   productCode: "t12S03",
  //   orderDate: new Date("18-Oct-2020"),
  // },
  // {
  //   order: 2,
  //   itemName: "RD B-39 Wireless Bluetooth v5.0 Connectivity Speaker ",
  //   quantity: 3,
  //   productCode: "D11e15",
  //   orderDate: new Date("18-Oct-2020"),
  // },
  // {
  //   order: 3,
  //   itemName: "Echo Dot (3rd Gen) - Smart speaker with Alexa ",
  //   quantity: 1,
  //   productCode: "ds542s5s",
  //   orderDate: new Date("18-Oct-2020"),
  // },
  // {
  //   order: 4,
  //   itemName: "Samsung 138 cm (55 inches) Crystal iSmart 4K Ultra HD Smart LED TV",
  //   quantity: 2,
  //   productCode: "ad5fd5-55",
  //   orderDate: new Date("18-Oct-2020"),
  // },
  // {
  //   order: 5,
  //   itemName: "Samsung 138 cm (55 inches) Crystal 4K Neo Series Ultra HD Smart LED TV",
  //   quantity: 1,
  //   productCode: "55fr5-01",
  //   orderDate: new Date("18-Oct-2020"),
  // },
  // {
  //   order: 6,
  //   itemName: "Samsung 108 cm (43 inches) Crystal iSmart 4K Ultra HD Smart LED TV",
  //   quantity: 3,
  //   productCode: "J1dd500",
  //   orderDate: new Date("18-Oct-2020"),
  // },
  // {
  //   order: 7,
  //   itemName: "Wesley Unisex Milestone Casual Waterproof Laptop Backpack",
  //   quantity: 1,
  //   productCode: "5502-235",
  //   orderDate: new Date("18-Oct-2020"),
  // },
  // {
  //   order: 8,
  //   itemName: "Zebronics Zeb-Transformer-M Optical",
  //   quantity: 2,
  //   productCode: "6566-d6265",
  //   orderDate: new Date("18-Oct-2020"),
  // },
  // {
  //   order: 9,
  //   itemName: "Dell Kb216 Wired Multimedia USB Keyboard",
  //   quantity: 1,
  //   productCode: "0214HJ41",
  //   orderDate: new Date("18-Oct-2020"),
  // },
  // {
  //   order: 10,
  //   itemName: "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Headphones",
  //   quantity: 1,
  //   productCode: "ST524U",
  //   orderDate: new Date("18-Oct-2020"),
  // },
  // ]

  quantity: number = 0;

  quantityFilter = new FormControl(0);

  orderList: any = [];

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(!token){
      console.error("Failed to fatch Order ")
      this.router.navigate(['/'])
    }
    if(token){
      this.dashboardService.productAll()
      .subscribe(
        (res) => {
         // console.log(res);
          this.orderList = res;
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
     // this.orderList = this.orderList;
     this.dashboardService.productAll()
     .subscribe(
       (res) => {
        // console.log(res);
         this.orderList = res;
       }
     )
    } else {
      this.orderList = this.orderList.filter((order: { itemName: string }) =>
        order.itemName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
     // console.log(this.orderList)
    }
  }

  toggleSearch() {
    //console.log(val)
    //this.router.navigate([`search/${val}`])
    this.searchVisible = this.searchVisible; //!this.searchVisible
  }
}
