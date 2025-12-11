import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const token = localStorage.getItem('token');

  // Skip token for registration and POST login (actual login request)
  // But allow token for GET login (which requires authentication)
  const isPostLogin = request.method === 'POST' && request.url.includes('/login');
  const isRegistration = request.url.includes('/registration');
  
  if (isRegistration || isPostLogin) {
    return next.handle(request);
  }

  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: token
      }
    });
  }

  return next.handle(request);
}

}
