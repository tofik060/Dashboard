import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { DashboardService } from './services/dashboard.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private dashboardService: DashboardService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    console.log('Request Interceptor', request);
    //return next.handle(request)

    if (token) {
      // request = request.clone({
      //   setHeaders: {
      //     Authorization: token
      //   }
      // });
      const newReq = request.clone({
        headers: new HttpHeaders({ Authorization:  token }),
      });
      return next.handle(newReq);
    }
    return next.handle(request);
  }
}
