// import { sectors } from './../landing-page/landing-page.component';
import { Component, OnInit } from '@angular/core';
 import {FormBuilder, FormControl, Validators} from '@angular/forms';
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


  ngOnInit(): void {
  }
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this.fb.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private fb : FormBuilder,private _snackBar: MatSnackBar) {}

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

   Options = this.fb.group({
    userName: this.fb.control('',[Validators.required]),
    logo: this.fb.control('',[Validators.required]),
    category:this.fb.control('',[Validators.required]),
  }) 

  get userName(){
    return this.Options.controls.userName;
   }
   
   get logo(){
    return this.Options.controls.logo;
   }
   get cateogory(){
    return this.Options.controls.category;
   }

   horizontalPosition: MatSnackBarHorizontalPosition = 'center';
   verticalPosition: MatSnackBarVerticalPosition = 'top';

  done(){
    this._snackBar.open('Your request has been sent', 'Done', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
