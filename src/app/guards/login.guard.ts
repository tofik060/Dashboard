import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { DashboardService } from "../services/dashboard.service";

@Injectable({
  providedIn: 'root'
})

export class loginGuard implements CanActivate{

  constructor(
    private dashboardService : DashboardService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check both isLoggedIn flag and localStorage token as fallback
    const token = localStorage.getItem('token');
    
    // If token exists but isLoggedIn is false, sync the state
    if (token && !this.dashboardService.isLoggedIn) {
      this.dashboardService.isLoggedIn = true;
    }
    
    const isAuthenticated = this.dashboardService.isLoggedIn || !!token;
    
    if (!isAuthenticated) {
      // Clear any stale data
      this.dashboardService.isLoggedIn = false;
      return this.router.createUrlTree(['/']);
    }
    
    return true;
  }
  canLoad(
    route: Route, 
    segments: UrlSegment[]
  ): boolean | UrlTree | Observable< boolean | UrlTree> | Promise< boolean | UrlTree> {
    // Check both isLoggedIn flag and localStorage token as fallback
    const token = localStorage.getItem('token');
    
    // If token exists but isLoggedIn is false, sync the state
    if (token && !this.dashboardService.isLoggedIn) {
      this.dashboardService.isLoggedIn = true;
    }
    
    const isAuthenticated = this.dashboardService.isLoggedIn || !!token;
    
    if (!isAuthenticated) {
      // Clear any stale data
      this.dashboardService.isLoggedIn = false;
    }
    
    return isAuthenticated;
  }
  
};
