import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  constructor(private formBuilder: FormBuilder, private route: Router) { }

  formSubmit:boolean;
  formControl: any;
  loginForm: FormGroup;
  data:boolean;
  ngOnInit(): void {

    localStorage.setItem(this.amail,this.apassword);

    this.loginForm= this.formBuilder.group({

      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    this.formControl=this.loginForm.controls;
  }

  handleLogInSubmit()
  { 
    this.formSubmit=true; 
    if(this.loginForm.invalid)
    {
      return;
    }
    else{
      if( (this.loginForm.value.email == sessionStorage.getItem("email")) &&  (this.loginForm.value.password == sessionStorage.getItem("password")))
      {
        this.route.navigate( ['/Cart'] );
      }
      else{
        alert("You are not valid User!! Register first.");
      }
    }
    
  }

  
}
  