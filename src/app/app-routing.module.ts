import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AddCartComponent } from './user/add-cart/add-cart.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';


const routes: Routes = [
  {
    path:"", component:FirstPageComponent
  },
  {
    path:"User", component:FirstPageComponent
  },
  {
    path:"Log", component: LoginComponent
  },
  
  {
    path: "Sign", component: RegisterComponent
  },
  {
    path:"page", component: AdminLoginComponent
  },
  {
    path:"Admin", component: AdminPageComponent
  },
  {
    path:"Cart", component:AddCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
