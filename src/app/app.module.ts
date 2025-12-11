import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  CookieService } from  "ngx-cookie-service"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table';
import { SettingComponent } from './setting/setting.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { OrderComponent } from './order/order.component';
import { OfferComponent } from './offer/offer.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { EmailValidatorDirective } from './emailvalidator/email-validator.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FilterPipe } from './home/filter.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CancellationComponent } from './cancellation/cancellation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { OrderRegisterComponent } from './order-register/order-register.component';
import { ConfirmDialogComponent } from './order-register/confirm-dialog.component';
import { CustomerDetailsDialogComponent } from './order/customer-details-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { RequestInterceptor } from './request.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { LogoutComponent } from './logout/logout.component';
import { SearchComponent } from './search/search.component';
import { RemoveAccountComponent } from './remove-account/remove-account.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    AppNavComponent,
    SettingComponent,
    ProductsComponent,
    CategoryComponent,
    OrderComponent,
    OfferComponent,
    UsersComponent,
    LoginComponent,
    EmailValidatorDirective,
    FilterPipe,
    CancellationComponent,
    RegisterComponent,
    EditUserComponent,
    OrderRegisterComponent,
    ConfirmDialogComponent,
    CustomerDetailsDialogComponent,
    LogoutComponent,
    SearchComponent,
    RemoveAccountComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTreeModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    HttpClientModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDialogModule,
    NgChartsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  },
  CookieService
],
  bootstrap: [AppComponent],
})
export class AppModule {}
