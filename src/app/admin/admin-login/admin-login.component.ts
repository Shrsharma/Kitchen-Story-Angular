import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  [x: string]: any;

  constructor(private formBuilder: FormBuilder, private route: Router) { }

  formSubmit:boolean;
  formControl: any;
  loginForm: FormGroup;
  data:boolean;
  validform: boolean;
  amail:string = "admin@gmail.com";
  apassword: string="123456789";
  ngOnInit(): void {

    

    this.loginForm= this.formBuilder.group({

      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    this.formControl=this.loginForm.controls;
  }

  handleLogInSubmit()
  {
    this.formSubmit=true;
    if( this.loginForm.invalid )
    {
      return;
    }
    else
    {
      if((this.loginForm.value.email == this.amail) && (this.loginForm.value.password == this.apassword))
      {
        this.route.navigate(['/Admin']);
      }
      else{
        alert("You are not Admin!!");
      }
    }
    
  }

  
}
  