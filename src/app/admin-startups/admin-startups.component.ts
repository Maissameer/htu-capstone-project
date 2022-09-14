import { Profile } from '../startups-profile';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDatepicker } from '@angular/material/datepicker';

export interface sectorOption{
  name:string;
}
export interface city{
  city:string;
}


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
  selector: 'app-admin-startups',
  templateUrl: './admin-startups.component.html',
  styleUrls: ['./admin-startups.component.css'],
  providers: [
    // {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    // {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    {provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FORMATS}
  ]


})
export class AdminStartupsComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb : FormBuilder,
    private _snackBar: MatSnackBar, public readonly dialogRef: MatDialogRef<AdminStartupsComponent>,
    @Inject(MAT_DIALOG_DATA) private profile: Profile
  ) {}

  ngOnInit(): void {
    this.setForm();
  }
  date = new FormControl(moment());

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
    {city:'Al-Karak'},

   ];

   setForm() {
    this.form = this.fb.group({
      employee: [this.profile.employee, [Validators.required]],
      userName: [this.profile.userName, [Validators.required]],
      founderName: [this.profile.founderName, [Validators.required]],
      logo: [this.profile.logo, [Validators.required]],
      category: [this.profile.category, [Validators.required]],
      // city: [this.profile.city, [Validators.required]],
      url: [this.profile.url, [Validators.required]],
      emailFormControl: [this.profile.emailFormControl, [Validators.required,  Validators.email]],
    
    });
  }

  // loginForm = this.fb.group({
  //   emailFormControl :new FormControl('', [Validators.required, Validators.email])
  
  // }) 
  
  // get employee(){
  //   return this.loginForm.controls.employee;
  //  }
  
  //  get userName(){
  //   return this.loginForm.controls.userName;
  //  }
  
  //  get logo(){
  //   return this.loginForm.controls.logo;
  //  }
  //  get category(){
  //   return this.loginForm.controls.category;
  //  }
  //  get url(){
  //   return this.loginForm.controls.url;
  //  }
  //  get emailFormControl(){
  //   return this.loginForm.controls.emailFormControl;
  //  }
  //  get founderName(){
  //   return this.loginForm.controls.founderName;
  //  }
  

   
 

   horizontalPosition: MatSnackBarHorizontalPosition = 'center';
   verticalPosition: MatSnackBarVerticalPosition = 'top';

  done(){
    this._snackBar.open('Your request has been sent', 'Done', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,

    });
    this.dialogRef.close({ ...this.profile, ...this.form.value });
  }

    setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
      const ctrlValue = this.date.value!;
      ctrlValue.month(normalizedMonthAndYear.month());
      ctrlValue.year(normalizedMonthAndYear.year());
      this.date.setValue(ctrlValue);
      datepicker.close();
    }
}
