import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterModel } from '../../models/register-model';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent  {

  constructor( private router: Router,
    private authService:AuthService,
    private fb: FormBuilder,
    public dialog: MatDialog) { }

  service: string [] = [];
  gotErrors = false;
  displayMsg = false;
  registerForm = this.fb.group({
    full_name: ['',Validators.required],
    email: ['', [Validators.required,Validators.email]],
    password: ['',Validators.required],
    password_confirmation: ['',Validators.required],
    billing_address: [''],
    default_shipping_address: [''],
    country: [''],
    phone:[''],
  });

  doRegister(){
    if (!this.registerForm.invalid){
      this.authService.doRegister(<RegisterModel>this.registerForm.value).subscribe(
        registerData => {
        console.log(registerData);
        this.service = JSON.parse(JSON.stringify(registerData));
        //this.displayMsg = true;
      },
      err =>{
        if(err.error){
          this.service = JSON.parse(JSON.stringify(err.error));
          console.log( 'serv '+JSON.stringify( this.service));
          this.displayMsg = true;
          this.gotErrors = true;
        }
      });
    }
  }


}
