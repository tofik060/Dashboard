import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DashboardService } from './services/dashboard.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle 401 Unauthorized errors (token expired or invalid)
        if (error.status === 401) {
          // Clear authentication data
          localStorage.removeItem('token');
          localStorage.removeItem('userInfo');
          this.dashboardService.isLoggedIn = false;
          this.dashboardService.userData.next({
            _id: '',
            name: '',
            email: '',
            phone: '',
            token: '',
            location: '',
            image: '',
          });

          // Only redirect if not already on login page
          if (!this.router.url.includes('/login') && !this.router.url.includes('/')) {
            this.router.navigate(['/']);
          }
        }

        return throwError(() => error);
      })
    );
  }
}

