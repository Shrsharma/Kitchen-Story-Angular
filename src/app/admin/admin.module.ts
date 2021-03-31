import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';



@NgModule({
  declarations: [AdminLoginComponent, AdminPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [AdminLoginComponent,AdminPageComponent] 
})
export class AdminModule { }
