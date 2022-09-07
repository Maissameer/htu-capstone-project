import { Route, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  //Build the form
  constructor(private fb : FormBuilder, 
    private AuthService : AuthService,
    private Router : Router ) { }
 

 loginForm = this.fb.group({
   email: this.fb.control('',[Validators.required,Validators.email]),
   password: this.fb.control('',[Validators.required,Validators.minLength(8)]),

 }) 

 formStatus?: string;

 get email(){
  return this.loginForm.controls.email;
 }

 get password(){
  return this.loginForm.controls.password;
 }

  ngOnInit(): void {
  }

  hide = false;

  onSubmit(){
    //login in firebase
    this.AuthService.signIn(this.loginForm.controls.email.value + '',
    this.loginForm.controls.password.value + '' )
         .subscribe({
          next: (data) => {
this.Router.navigate(['admin-veiw']);
         },
         error: (error) => {
this.formStatus = error.message;
         }});
  }
}
