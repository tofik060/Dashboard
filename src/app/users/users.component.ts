import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

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
    const userInfoStr = localStorage.getItem('userInfo');
    if(!token){
      this.router.navigate(['/'])
    }
    if(token && userInfoStr){
      const userInfo = JSON.parse(userInfoStr);
      this.dashboardService.profile(userInfo?._id).subscribe((res) =>{
        this.user = res
      })
      this.dashboardService.Login();
    }

  }

  getImageUrl(imagePath: any): string {
    if (!imagePath || typeof imagePath !== 'string') return '../../assets/profile.jpg';
    const backendUrl = this.dashboardService.getBackendUrl();
    return `${backendUrl}/${imagePath}`;
  }
}
