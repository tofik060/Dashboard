import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService } from '../services/dashboard.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  error: any = null;
  
  
  constructor(
    private router: Router,
    private dashboardService: DashboardService,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    // If user is already logged in, redirect to home
    const token = localStorage.getItem('token');
    if (token || this.dashboardService.isLoggedIn) {
      this.router.navigate(['/home']);
    }
  }

  login() {
      this.dashboardService.login(this.email, this.password) .subscribe((response: any) => {
        if(!response.userData){
          this.error = "Invalid user details, Please try again later!"
        }
        if (this.password != response.userData.password) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userInfo', JSON.stringify(response.userData));
          this.cookie.set('token', response.token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days in milliseconds
          });
          // Set isLoggedIn to true after successful login
          this.dashboardService.isLoggedIn = true;
          this.router.navigate(['/home']);
          window.location.reload();
        } else {
          this.router.navigate(['/']);
        }
  });
   
  }
}
