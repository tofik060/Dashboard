import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { DashboardService } from '../services/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm : any =[]

  email: string = '';
  password: string = '';

  user: any;
  
  constructor(
    private dashboardService : DashboardService,
    private router : Router
  ){
     
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(!token){
      console.error("Failed to fatch Profile ")
      this.router.navigate(['/'])
    }
    if(token){
      this.dashboardService.userData.subscribe((res) =>{
        this.user = res
      //console.log("Component Profile User", this.user)
      })
      this.dashboardService.Login();

      // this.dashboardService.profileAll().subscribe(
      //   (res) => {
      //     console.log(res);
      //     this.userForm = res;
      //   }
      // );
    }

  }
}
