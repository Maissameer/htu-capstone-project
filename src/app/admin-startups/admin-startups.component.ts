import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';

export interface sectorOption{
  name:string;
}
export interface city{
  city:string;
}

@Component({
  selector: 'app-admin-startups',
  templateUrl: './admin-startups.component.html',
  styleUrls: ['./admin-startups.component.css']
})
export class AdminStartupsComponent implements OnInit {

  ngOnInit(): void {
  }
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this.fb.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private fb : FormBuilder) {}

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

   Options = this.fb.group({
    userName: this.fb.control('',[Validators.required]),
    logo: this.fb.control('',[Validators.required]),
    category:this.fb.control('',[Validators.required]),
    city:this.fb.control('',[Validators.required]),

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

  done(){
    alert('Your request is waiting the approval');
  }
}