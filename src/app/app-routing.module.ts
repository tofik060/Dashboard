import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SettingComponent } from './setting/setting.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { OrderComponent } from './order/order.component';
import { OfferComponent } from './offer/offer.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';
import { CancellationComponent } from './cancellation/cancellation.component';
import { RegisterComponent } from './register/register.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { OrderRegisterComponent } from './order-register/order-register.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchComponent } from './search/search.component';
import { RemoveAccountComponent } from './remove-account/remove-account.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';





const routes: Routes = [
 // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'',component:LoginComponent},
  {path : 'home',component:HomeComponent},
  {path:'products',component:ProductsComponent}, //,canActivate:[loginGuard]
  {path:'category',component:CategoryComponent},
  {path:'order',component:OrderComponent},
  {path:'cancellation/:id',component: CancellationComponent},
  {path:'offer',component:OfferComponent},
  {path:'profile',component:UsersComponent},
  {path:'registration',component:RegisterComponent},
  {path:'profile-edit/:id',component:EditUserComponent},
  {path:'order-details/:id',component:OrderRegisterComponent},
  {path:'remove-account/:id', component: RemoveAccountComponent},
  {path:'forget-password', component:ForgetPasswordComponent},
  {path:'change-password/:id', component:ChangePasswordComponent},
  {path:'reset-password/:id/:token', component:ResetPasswordComponent },
  {path:'logout',component:LogoutComponent},
  //{path:'search/:query',component:SearchComponent},
  // {path:'dashboard',component:DashboardComponent},
  // {path:'setting',component:SettingComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
