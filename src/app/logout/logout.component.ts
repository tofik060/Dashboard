import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  user: any;

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ){}

    ngOnInit(): void {
      const token = localStorage.getItem('token');
      if(!token){
        console.error("Failed to fatch logout ")
        this.router.navigate(['/'])
      }
      if(token){
        this.dashboardService.logout()
        // .subscribe(
        //   (response) => {
        //     this.user = response;
        //     localStorage.removeItem('token');
        //     console.log("Logout Successfully");
        //     this.router.navigate(['/'])
        //   }
        // )
      }else{
        this.router.navigate(['/'])
      }
    }
}
