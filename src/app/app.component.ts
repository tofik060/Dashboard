import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DashboardApp';
  constructor(private router: Router){}

  ngOnInit(): void {
    // this.router.events.pipe(
    //   filter((event) => event instanceof NavigationStart)
    // ).subscribe((event) => {console.log("Navigation Start")})
  }
 
}
