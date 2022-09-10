import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import {MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
  
export interface sectorOption{
  name:string;
}
export interface city{
  city:string;
}

import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';

const moment = _rollupMoment || _moment;


export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-update-startup',
  templateUrl: './update-startup.component.html',
  styleUrls: ['./update-startup.component.css']
})
export class UpdateStartupComponent implements OnInit {

  ngOnInit(): void {
  }
  date = new FormControl(moment());

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

   sectorsOptions: sectorOption[] = [
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

   cities: city[] = [
    {city:'Amman'},
    {city:'Al-Salt'},
    {city:'Irbid'},
    {city:'Muan'},
    {city:'Jarash'},
    {city:'Azarqa'},
    {city:'Ajloun'},
    {city:'Mafraq'},
    {city:'Aqaba'},
    {city:'Tafila'},
    {city:'Al-Karak'}

   ];

  loginForm = this.fb.group({
    employee : new FormControl('', [Validators.required]),
    userName : new FormControl('', [Validators.required]),
    founderName : new FormControl('', [Validators.required]),
    logo : new FormControl('', [Validators.required]),
    category : new FormControl('', [Validators.required]),
    url : new FormControl('', [Validators.required]),
    emailFormControl :new FormControl('', [Validators.required, Validators.email])
  
  }) 
  
  get employee(){
    return this.loginForm.controls.employee;
   }
  
   get userName(){
    return this.loginForm.controls.userName;
   }
  
   get logo(){
    return this.loginForm.controls.logo;
   }
   get category(){
    return this.loginForm.controls.category;
   }
   get url(){
    return this.loginForm.controls.url;
   }
   get emailFormControl(){
    return this.loginForm.controls.emailFormControl;
   }
   get founderName(){
    return this.loginForm.controls.founderName;
   }
  

   
 

   horizontalPosition: MatSnackBarHorizontalPosition = 'center';
   verticalPosition: MatSnackBarVerticalPosition = 'top';

  done(){
    this._snackBar.open('Your request has been sent', 'Done', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });  }

    setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
      const ctrlValue = this.date.value!;
      ctrlValue.month(normalizedMonthAndYear.month());
      ctrlValue.year(normalizedMonthAndYear.year());
      this.date.setValue(ctrlValue);
      datepicker.close();
    }
}
