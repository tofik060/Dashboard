import { Component, Input, inject,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatMenuPanel } from '@angular/material/menu';
import { user } from '../users/user';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {
  // userName: user[] = [
  //   {
  //     Name: "Jack",
  //     EmailId: "admin@gmail.com",
  //     PhoneNumber: 9856237441,
  //     Address: "America",
  //   }
  // ];

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  set menu(menu: MatMenuPanel | null) { }

  userForm : any =[]
  user: any;
  constructor(
    private dashboardService : DashboardService,
    private router : Router
  ){}
    ngOnInit(): void {
      this.dashboardService.userData.subscribe((res) =>{
        this.user = res
      // console.log("Profile User", this.user)
      })
      // const token = localStorage.getItem('token');
      // if(!token){
      //   console.error("Failed to fatch Profile ")
      //   this.router.navigate(['/'])
      // }
      // if(token){
      //   this.dashboardService.profileAll(token).subscribe(
      //     (res) => {
      //       console.log(res);
      //       this.userForm = res;
      //     }
      //   )  
      // }
  
    }
}
