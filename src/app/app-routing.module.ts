import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { RemoveAccountComponent } from './remove-account/remove-account.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path : 'home',component:HomeComponent,canActivate:[loginGuard]},
  {path:'products',component:ProductsComponent,canActivate:[loginGuard]},
  {path:'category',component:CategoryComponent,canActivate:[loginGuard]},
  {path:'order',component:OrderComponent,canActivate:[loginGuard]},
  {path:'cancellation/:id',component: CancellationComponent,canActivate:[loginGuard]},
  {path:'offer',component:OfferComponent,canActivate:[loginGuard]},
  {path:'profile',component:UsersComponent,canActivate:[loginGuard]},
  {path:'profile-edit/:id',component:EditUserComponent,canActivate:[loginGuard]},
  {path:'order-details/:id',component:OrderRegisterComponent,canActivate:[loginGuard]},
  {path:'remove-account/:id', component: RemoveAccountComponent,canActivate:[loginGuard]},
  {path:'change-password/:id', component:ChangePasswordComponent,canActivate:[loginGuard]},
  {path:'reset-password/:id/:token', component:ResetPasswordComponent,canActivate:[loginGuard] },
  {path:'logout',component:LogoutComponent,canActivate:[loginGuard]},
  
  {path:'registration',component:RegisterComponent},
  {path:'forget-password', component:ForgetPasswordComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
