import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { DashboardService } from "../services/dashboard.service";

@Injectable({
  providedIn: 'root'
})

export class loginGuard implements CanActivate, CanLoad{
  [x: string]: any;

  constructor(private dashboardService : DashboardService){}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.dashboardService.isLoggedIn? true : this["router"].navigate(['/login']);
  }
  canLoad(
    route: Route, 
    segments: UrlSegment[]): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.dashboardService.isLoggedIn;
  }
  
};
