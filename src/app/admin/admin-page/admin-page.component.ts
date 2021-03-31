import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  formSubmitted: boolean;
  formControls:any;


  constructor( private formBuilder: FormBuilder, private route: Router) {}

  signupForm: FormGroup;
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required]

    })
    this.formControls=this.signupForm.controls;

  }

  handleFormSubmit() {
    this.formSubmitted=true;
    if(confirm('Items Added!!')){
      window.location.reload();  
  }
    
  }

}
 