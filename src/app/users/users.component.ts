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
        this.user = res;
        // Try to fetch image from uploadDoc
        if (res && res.email) {
          this.fetchUserImage(res.email);
        }
      })
      this.dashboardService.Login();
    }

  }

  fetchUserImage(email: string): void {
    this.dashboardService.getUploadDocByEmail(email).subscribe({
      next: (response: any) => {
        if (response.success && response.data && response.data.image) {
          // Update user image from uploadDoc
          if (this.user) {
            this.user.image = response.data.image;
          }
        }
      },
      error: (error) => {
        // Silently fail - use existing image or default
        console.log('Could not fetch image from uploadDoc:', error);
      }
    });
  }

  getImageUrl(imagePath: any): string {
    if (!imagePath || typeof imagePath !== 'string') return '../../assets/profile.jpg';
    const backendUrl = this.dashboardService.getBackendUrl();
    return `${backendUrl}/${imagePath}`;
  }
}
