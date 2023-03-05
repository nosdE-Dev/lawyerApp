import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginModel } from '../../models/login-model';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor( private router: Router,
    private authService:AuthService,
    public dialog: MatDialog) { }

    ngOnInit(): void {
      localStorage.setItem('token', '' );
    }

  loginObj = new LoginModel('','');
  submitted = false;

  service: string [] = [];
  gotErrors = false;
  displayMsg = false;

  tryLogin(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.loginObj.email = this.loginForm.value.email!;
    this.loginObj.password = this.loginForm.value.password!;

    this.authService.login(this.loginObj).subscribe(
      loginData => {
      if ( loginData.token ) {
        this.router.navigate(['./home']);
        //this.displayMsg = true;
      }
    },err=> {
        console.log('err  '+JSON.stringify(err.error));
        this.service = JSON.parse(JSON.stringify(err.error));
        console.log( 'serv '+JSON.stringify( this.service));
        this.gotErrors = true;
        this.displayMsg = true;
        //this.openDialog(err.error);
    });
  }


  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('',Validators.required),
  });

  openDialog(error:string[]) {

    this.dialog.open(DialogComponent,{
      data:{loginError:error}
    });
  }
}
