import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService } from '../services/dashboard.service';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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

  ngOnInit(): void {}

  login() {
    
      // if (this.dashboardService.login(this.email, this.password)) {
      //   this.route.navigate(['/home']);
      // }
      this.dashboardService.login(this.email, this.password) .subscribe((response: any) => {
        if(!response.userData){
          console.log("Invalid user details, Please try again later!");
          this.error = "Invalid user details, Please try again later!"
        }
        if (this.password != response.userData.password) {
          console.log('Login Successfull');
          localStorage.setItem('token', response.token);
          this.cookie.set('token', response.token, {
            expires: new Date(Date.now() + 60 * 1000),
          });
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/']);
        }

        //const expirationTime = new Date(Date.now() + 60000);
        // const expirationTimestamp = new Date().getTime() + 60 * 1000;
        // const tokenObject = {
        //   value: response.token,
        //   timestamp: expirationTimestamp,
        // };

        // localStorage.setItem('token', JSON.stringify(tokenObject));
      });
   
  }
}
