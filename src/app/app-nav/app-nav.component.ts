import { Component, Input, inject,OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatMenuPanel } from '@angular/material/menu';
import { user } from '../users/user';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit, OnDestroy {
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
  isPinned: boolean = false;
  private subscription: any;
  
  constructor(
    private dashboardService : DashboardService,
    private router : Router
  ){}
  
  get isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !!(this.user && this.user.token) || !!token;
  }
  
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    
    // Check if user data is already available (from localStorage)
    const currentUser = this.dashboardService.userData.value;
    if (currentUser && currentUser._id && currentUser._id !== '') {
      this.user = currentUser;
      return;
    }

    // Subscribe to user data
    this.subscription = this.dashboardService.userData.subscribe((res) => {
      // Check if we have valid user data (not empty/default)
      if (res && res._id && res._id !== '') {
        this.user = res;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  togglePin(drawer: any): void {
    this.isPinned = !this.isPinned;
    if (this.isPinned) {
      drawer.open();
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
