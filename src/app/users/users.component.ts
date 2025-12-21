import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

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
    if (!imagePath || typeof imagePath !== 'string') return 'assets/profile.jpg';
    const backendUrl = this.dashboardService.getBackendUrl();
    return `${backendUrl}/${imagePath}`;
  }

  getUserInitials(): string {
    if (!this.user || !this.user.name) return 'U';
    const nameParts = this.user.name.trim().split(' ');
    if (nameParts.length >= 2) {
      // Get first letter of first word and first letter of last word
      return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
    } else if (nameParts.length === 1) {
      // Single word name - take first two letters
      return nameParts[0].substring(0, 2).toUpperCase();
    }
    return 'U';
  }

  hasUserImage(): boolean {
    return !!(this.user && this.user.image && typeof this.user.image === 'string' && this.user.image.trim() !== '' && environment.production === false);
  }
}
