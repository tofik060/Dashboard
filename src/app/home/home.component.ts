import { Component, Input, OnInit } from '@angular/core';
import { OrderList } from './home';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quantity: number = 0;

  quantityFilter = new FormControl(0);
  
  // orderList: OrderList[] = [
  //   {
  //     order: 1,
  //     itemName: "realme narzo N53 ",
  //     quantity: 1,
  //     productCode: "t12S03",
  //     orderDate: new Date("18-Oct-2020"),
  //     price: 19999,
  //   },
  //   {
  //     order: 2,
  //     itemName: "RD B-39 Wireless Bluetooth v5.0 Connectivity Speaker ",
  //     quantity: 3,
  //     productCode: "D11e15",
  //     orderDate: new Date("18-Oct-2020"),
  //     price: 5999,
  //   },
  //   {
  //     order: 3,
  //     itemName: "Echo Dot (3rd Gen) - Smart speaker with Alexa ",
  //     quantity: 1,
  //     productCode: "ds542s5s",
  //     orderDate: new Date("18-Oct-2020"),
  //     price: 6999,
  //   },
  //   {
  //     order: 4,
  //     itemName: "Samsung 138 cm (55 inches) Crystal iSmart 4K Ultra HD Smart LED TV",
  //     quantity: 2,
  //     productCode: "ad5fd5-55",
  //     orderDate: new Date("18-Oct-2020"),
  //     price: 90999,
  //   },
  //   {
  //     order: 5,
  //     itemName: "Samsung 138 cm (55 inches) Crystal 4K Neo Series Ultra HD Smart LED TV",
  //     quantity: 1,
  //     productCode: "55fr5-01",
  //     orderDate: new Date("18-Oct-2020"),
  //     price: 50990,
  //   },
  //   {
  //     order: 6,
  //     itemName: "Samsung 108 cm (43 inches) Crystal iSmart 4K Ultra HD Smart LED TV",
  //     quantity: 3,
  //     productCode: "J1dd500",
  //     orderDate: new Date("18-Oct-2020"),
  //     price: 150999,
  //   },
  //   {
  //     order: 7,
  //     itemName: "Wesley Unisex Milestone Casual Waterproof Laptop Backpack",
  //     quantity: 1,
  //     productCode: "5502-235",
  //     orderDate: new Date("18-Oct-2020"),
  //     price: 3599,
  //   },
  //   {
  //     order: 8,
  //     itemName: "Zebronics Zeb-Transformer-M Optical",
  //     quantity: 2,
  //     productCode: "6566-d6265",
  //     orderDate: new Date("18-Oct-2020"),
  //     price: 5500,
  //   },
  //   {
  //     order: 9,
  //     itemName: "Dell Kb216 Wired Multimedia USB Keyboard",
  //     quantity: 1,
  //     productCode: "0214HJ41",
  //     orderDate: new Date("18-Oct-2020"),
  //     price: 999,
  //   },
  //   {
  //     order: 10,
  //     itemName: "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Headphones",
  //     quantity: 1,
  //     productCode: "ST524U",
  //     orderDate: new Date("18-Oct-2020"),
  //     price: 2999,
  //   },
  // ]

  orderList: any = [];

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ){}

    ngOnInit(): void {
     
      this.dashboardService.productAll()
      .subscribe(
        (res) => {
          //console.log(res);
          this.orderList = res;
        }
      )
    }
 
}
