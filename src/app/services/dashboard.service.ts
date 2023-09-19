import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private REST_API = 'http://localhost:9000/api';
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookie: CookieService
  ) {}

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

  orderData0: BehaviorSubject<{
    _id: string;
    itemName: string;
    quantity: string;
    productCode: string;
    orderDate: string;
    price: string;
  }> = new BehaviorSubject({
    _id: '',
    itemName: '',
    quantity: '',
    productCode: '',
    orderDate: '',
    price: '',
  });
  orderData1: BehaviorSubject<{
    _id: string;
    itemName: string;
    quantity: string;
    productCode: string;
    orderDate: string;
    price: string;
  }> = new BehaviorSubject({
    _id: '',
    itemName: '',
    quantity: '',
    productCode: '',
    orderDate: '',
    price: '',
  });
  orderData2: BehaviorSubject<{
    _id: string;
    itemName: string;
    quantity: string;
    productCode: string;
    orderDate: string;
    price: string;
  }> = new BehaviorSubject({
    _id: '',
    itemName: '',
    quantity: '',
    productCode: '',
    orderDate: '',
    price: '',
  });
  orderData3: BehaviorSubject<{
    _id: string;
    itemName: string;
    quantity: string;
    productCode: string;
    orderDate: string;
    price: string;
  }> = new BehaviorSubject({
    _id: '',
    itemName: '',
    quantity: '',
    productCode: '',
    orderDate: '',
    price: '',
  });
  orderData4: BehaviorSubject<{
    _id: string;
    itemName: string;
    quantity: string;
    productCode: string;
    orderDate: string;
    price: string;
  }> = new BehaviorSubject({
    _id: '',
    itemName: '',
    quantity: '',
    productCode: '',
    orderDate: '',
    price: '',
  });
  orderData5: BehaviorSubject<{
    _id: string;
    itemName: string;
    quantity: string;
    productCode: string;
    orderDate: string;
    price: string;
  }> = new BehaviorSubject({
    _id: '',
    itemName: '',
    quantity: '',
    productCode: '',
    orderDate: '',
    price: '',
  });
  orderData6: BehaviorSubject<{
    _id: string;
    itemName: string;
    quantity: string;
    productCode: string;
    orderDate: string;
    price: string;
  }> = new BehaviorSubject({
    _id: '',
    itemName: '',
    quantity: '',
    productCode: '',
    orderDate: '',
    price: '',
  });
  orderData7: BehaviorSubject<{
    _id: string;
    itemName: string;
    quantity: string;
    productCode: string;
    orderDate: string;
    price: string;
  }> = new BehaviorSubject({
    _id: '',
    itemName: '',
    quantity: '',
    productCode: '',
    orderDate: '',
    price: '',
  });
  orderData8: BehaviorSubject<{
    _id: string;
    itemName: string;
    quantity: string;
    productCode: string;
    orderDate: string;
    price: string;
  }> = new BehaviorSubject({
    _id: '',
    itemName: '',
    quantity: '',
    productCode: '',
    orderDate: '',
    price: '',
  });
  orderData9: BehaviorSubject<{
    _id: string;
    itemName: string;
    quantity: string;
    productCode: string;
    orderDate: string;
    price: string;
  }> = new BehaviorSubject({
    _id: '',
    itemName: '',
    quantity: '',
    productCode: '',
    orderDate: '',
    price: '',
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
      //console.log('Login Profile user : ', response);
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
      // .subscribe((response: any) => {
      //   // console.log('profile user : ', response);
      //   // this.userData.next({
      //   //   _id: response.userData._id,
      //   //   name: response.userData.name,
      //   //   email: response.userData.email,
      //   //   phone: response.userData.phone,
      //   //   token: response.userData.tokens[0].token,
      //   //   location: response.userData.location,
      //   // });
      //   if (password != response.userData.password) {
      //     console.log('Login Successfull');
      //     localStorage.setItem('token', response.token);
      //     this.cookie.set('token', response.token, {
      //       expires: new Date(Date.now() + 60 * 1000),
      //     });
      //     this.router.navigate(['/home']);
      //   } else {
      //     this.router.navigate(['/']);
      //   }

      //   //const expirationTime = new Date(Date.now() + 60000);
      //   // const expirationTimestamp = new Date().getTime() + 60 * 1000;
      //   // const tokenObject = {
      //   //   value: response.token,
      //   //   timestamp: expirationTimestamp,
      //   // };

      //   // localStorage.setItem('token', JSON.stringify(tokenObject));
      // });
  }

  /************************* Logout User *********************************** */

  logout() {
    let api_url = `${this.REST_API}/logout`;
    return this.http.get(api_url).subscribe((response: any) => {
      console.log('LogOut profile user : ', response);
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
      this.cookie.delete('token');
      console.log('Logout Successfully');
      this.router.navigate(['/']);
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
    return this.http.post(api_url, data).subscribe((response: any) => {
      console.log('Update profile user : ', response);
      this.userData.next(response);
      this.router.navigate(['/profile']);
    });
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

  /******************************** Order ********************************** */
  // orderAll() {
  //   let api_url = `${this.REST_API}/order-details`;
  //   return this.http.get(api_url).pipe(catchError(this.handleError));
  // }

  /************************* Order All With token ********************************** */

  orderall() {
    let api_url = `${this.REST_API}/order-details`;
    return this.http.get(api_url).subscribe((response: any) => {
      //console.log('order user : ', response);
      this.orderData0.next({
        _id: response[0]._id,
        itemName: response[0].itemName,
        quantity: response[0].quantity,
        productCode: response[0].productCode,
        orderDate: response[0].orderDate,
        price: response[0].price,
      });
      this.orderData1.next({
        _id: response[1]._id,
        itemName: response[1].itemName,
        quantity: response[1].quantity,
        productCode: response[1].productCode,
        orderDate: response[1].orderDate,
        price: response[1].price,
      });
      this.orderData2.next({
        _id: response[2]._id,
        itemName: response[2].itemName,
        quantity: response[2].quantity,
        productCode: response[2].productCode,
        orderDate: response[2].orderDate,
        price: response[2].price,
      });
      this.orderData3.next({
        _id: response[3]._id,
        itemName: response[3].itemName,
        quantity: response[3].quantity,
        productCode: response[3].productCode,
        orderDate: response[3].orderDate,
        price: response[3].price,
      });
      this.orderData4.next({
        _id: response[4]._id,
        itemName: response[4].itemName,
        quantity: response[4].quantity,
        productCode: response[4].productCode,
        orderDate: response[4].orderDate,
        price: response[4].price,
      });
      this.orderData5.next({
        _id: response[5]._id,
        itemName: response[5].itemName,
        quantity: response[5].quantity,
        productCode: response[5].productCode,
        orderDate: response[5].orderDate,
        price: response[5].price,
      });
      this.orderData6.next({
        _id: response[6]._id,
        itemName: response[6].itemName,
        quantity: response[6].quantity,
        productCode: response[6].productCode,
        orderDate: response[6].orderDate,
        price: response[6].price,
      });
      this.orderData7.next({
        _id: response[7]._id,
        itemName: response[7].itemName,
        quantity: response[7].quantity,
        productCode: response[7].productCode,
        orderDate: response[7].orderDate,
        price: response[7].price,
      });
      this.orderData8.next({
        _id: response[8]._id,
        itemName: response[8].itemName,
        quantity: response[8].quantity,
        productCode: response[8].productCode,
        orderDate: response[8].orderDate,
        price: response[8].price,
      });
      this.orderData9.next({
        _id: response[9]._id,
        itemName: response[9].itemName,
        quantity: response[9].quantity,
        productCode: response[9].productCode,
        orderDate: response[9].orderDate,
        price: response[9].price,
      });
    });
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

  /********************** Product  ****************************************** */
  // productall() {
  //   let api_url = `${this.REST_API}/product`;
  //   return this.http.get(api_url).pipe(catchError(this.handleError));
  // }

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
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
function jwt_decode(token: string): any {
  throw new Error('Function not implemented.');
}
