import { from } from 'rxjs';
import { ProfileService } from './../profile.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { sectors } from './../landing-page/landing-page.component';
import { Component, OnInit } from '@angular/core';
 import {FormBuilder, FormControl, FormControlStatus, Validators} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import {MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

export interface categoryOptions {
  name: string;
}

@Component({
  selector: 'app-admin-sectors',
  templateUrl: './admin-sectors.component.html',
  styleUrls: ['./admin-sectors.component.css']
})
export class AdminSectorsComponent implements OnInit {
   
  constructor(private fb : FormBuilder,private _snackBar: MatSnackBar ,private  router: Router,
    private profileService: ProfileService,private route: ActivatedRoute
    ) {}
    statusChanges: FormControlStatus [] = [];
    valueChanges: any [] = [];

  ngOnInit(): void {
  }
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this.fb.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

 
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

   sectorsOptions: categoryOptions[] = [
    {name: 'Jordan Map'},
     {name: '3D PRINTING'},
     {name: 'AGRITECH'},
     {name: 'BLOCKCHAIN'},
     {name: 'DATA AI & ML'},
     {name: 'CYBER SECURITY'},
     {name: 'ECOMMERCE'},
     {name: 'EDTECH'},
     {name: 'IOT'},
     {name: 'DATA AI & ML'},
     {name: 'SPORTSTECH'},
     {name: 'OTHER'},
   ];

   loginForm = this.fb.group({
    userName: this.fb.control('',[Validators.required]),
    logo: this.fb.control('',[Validators.required]),
    category:this.fb.control('',[Validators.required]),
  }) 

  get userName(){
    return this.loginForm.controls.userName;
   }
   
   get logo(){
    return this.loginForm.controls.logo;
   }
   get category(){
    return this.loginForm.controls.category;
   }


   horizontalPosition: MatSnackBarHorizontalPosition = 'center';
   verticalPosition: MatSnackBarVerticalPosition = 'top';

  done(){
    this._snackBar.open('Your request has been sent', 'Done', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });


    //save data 
   // this.profileService.addProfile(this.options.value as Profile)
    //navigate to list page
this.router.navigate(['/profile-list'])
  }

  
}
