import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private REST_API = environment.apiUrl;
  
  // Get backend base URL (without /api)
  getBackendUrl(): string {
    return environment.apiUrl.replace('/api', '');
  }
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookie: CookieService
  ) {
    // Check if user is already logged in (on page refresh)
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
      // Restore user info if available
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo) {
        try {
          const user = JSON.parse(userInfo);
          this.userData.next({
            _id: user._id || '',
            name: user.name || '',
            email: user.email || '',
            phone: user.phone || '',
            token: token,
            location: user.location || '',
            image: user.image || '',
          });
        } catch (error) {
          throw error;
        }
      }
    }
  }

  userData: BehaviorSubject<{
    _id: string;
    name: string;
    email: string;
    phone: string;
    token: string;
    location: string;
    image: string;
  }> = new BehaviorSubject({
    _id: '',
    name: '',
    email: '',
    phone: '',
    token: '',
    location: '',
    image: '',
  });

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  /*********************** Cancellation  **************************************** */

  cancelUser(data: any) {
    let api_url = `${this.REST_API}/cancel`;
    return this.http.post(api_url, data).pipe(catchError(this.handleError));
  }

  /************************** Registration *********************************************** */

  register(data: FormData) {
    let api_url = `${this.REST_API}/registration`;
    return this.http.post(api_url, data).pipe(catchError(this.handleError));
  }

  registration() {
    let api_url = `${this.REST_API}/registration`;
    return this.http.get(api_url).pipe(catchError(this.handleError));
  }

  /************************* Login User ********************************** */

  Login() {
    let api_url = `${this.REST_API}/login`;
    return this.http.get(api_url).subscribe((response: any) => {
      this.userData.next({
        _id: response._id,
        name: response.name,
        email: response.email,
        phone: response.phone,
        token: response.tokens[0].token,
        location: response.location,
        image: response.image,
      });
    });
  }

  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  userSub: any;

  login(email: string, password: string) {
    if (email === email && password === password) {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }

    let api_url = `${this.REST_API}/login`;
    return this.http
      .post(
        api_url,
        { email: email, password: password },
        { headers: this.httpHeaders }
      )
  }

  /************************* Logout User *********************************** */

  logout() {
    let api_url = `${this.REST_API}/logout`;
    return this.http.get(api_url).subscribe((response: any) => {
      this.userData.next({
        _id: '',
        name: '',
        email: '',
        phone: '',
        token: '',
        location: '',
        image: '',
      });
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      this.cookie.delete('token');
      this.isLoggedIn = false;
      this.isAdmin = false;
      this.router.navigate(['/']);
      window.location.reload();
    });
  }

  /*********************************** Profile User *********************************************** */
  //User
  profileAll() {
    let api_url = `${this.REST_API}/profile`;
    return this.http.get(api_url).pipe(catchError(this.handleError));
  }
  // Edit-User
  profile(id: any) {
    let api_url = `${this.REST_API}/profile/${id}`;
    return this.http.get(api_url).pipe(catchError(this.handleError));
  }
  /************************** Profile Update ****************************** */
  // Edit-User
  updateUser(id: any, data: FormData) {
    let api_url = `${this.REST_API}/update/${id}`;
    return this.http.post(api_url, data).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  /************************** UploadDoc API ****************************** */
  // Get uploadDoc by email (for navbar and profile image)
  getUploadDocByEmail(email: string) {
    let api_url = `${this.REST_API}/uploadDoc/${email}`;
    return this.http.get(api_url).pipe(catchError(this.handleError));
  }

  // Get all uploadDocs (optional, for admin)
  getAllUploadDocs() {
    let api_url = `${this.REST_API}/uploadDoc`;
    return this.http.get(api_url).pipe(catchError(this.handleError));
  }
  /******************************* Change Password ************************************** */
  changePassword(id:any,data:any){
    let api_url = `${this.REST_API}/change-password/${id}`;
    return this.http.post(api_url,data);
  }
  /********************** Forget-Password ***************************** */
  forgetPassword(data:any){
    let api_url = `${this.REST_API}/forget-password`;
    return this.http.post(api_url,data)
  }
  forgetPasswordget(id:string,token:string){
    let api_url = `${this.REST_API}/forget-password/${id}/${token}`;
    return this.http.get(api_url)
  }
  /************************ Reset-Password **************************************** */
  resetPassword(id:string,token:string,data:any){
    let api_url = `${this.REST_API}/reset-password/${id}/${token}`;
    return this.http.post(api_url,data)
  }
  /********************* Remove Account ********************************** */

  removeAccount(id: any, email: string, password: string, data: any) {
    let api_url = `${this.REST_API}/delete/${id}`;
    return this.http.post(api_url, { email, password }, data);
  }

  /************************* Order All With token ********************************** */

  orderAll() {
    let api_url = `${this.REST_API}/order-details`;
    return this.http.get(api_url).pipe(catchError(this.handleError));
  }

  order(data: any) {
    let api_url = `${this.REST_API}/order-details`;
    return this.http.post(api_url, data).pipe(catchError(this.handleError));
  }

  orderId(id: any) {
    let api_url = `${this.REST_API}/order-details/${id}`;
    return this.http.get(api_url).pipe(catchError(this.handleError));
  }

  orderUpdateId(id: any, data: any) {
    let api_url = `${this.REST_API}/order-details-update/${id}`;
    return this.http.post(api_url, data).pipe(catchError(this.handleError));
  }

  /************************ product *************************** */
  productAll() {
    let api_url = `${this.REST_API}/product`;
    return this.http.get(api_url).pipe(catchError(this.handleError));
  }

  product(data: any) {
    let api_url = `${this.REST_API}/product`;
    return this.http.post(api_url, data).pipe(catchError(this.handleError));
  }
  productId(id: any) {
    let api_url = `${this.REST_API}/product/${id}`;
    return this.http.get(api_url).pipe(catchError(this.handleError));
  }

  productUpdateId(id: any, data: any) {
    let api_url = `${this.REST_API}/product-details/${id}`;
    return this.http.post(api_url, data).pipe(catchError(this.handleError));
  }

  //Handle Error

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle Error Client
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n Message : ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
