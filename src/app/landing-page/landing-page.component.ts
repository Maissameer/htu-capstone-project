import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';


//trying to do the filter:

export interface colors{
  colors: string;
}
export interface sectors {
  name: string;
}
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
//trying to do the filter:


  //end of trying

  constructor() { }

  ngOnInit(): void {}

  sectors: sectors[] = [
    {name: 'Jordan Map'},
    {name: '3D PRINTING'},
    {name: 'AGRITECH'},
    {name: 'BLOCKCHAIN'},
    {name: 'DATA AI & ML'},
    {name: 'CYBER SECURITY'},
    {name: 'ECOMMERCE'},
    {name: 'EDTECH'},
    {name: 'IOT'},
    {name: 'GAMING'},
    {name: 'SPORTSTECH'},
    {name: 'OTHER'},
  ];

  colors: colors[] =[


  ]

  

}
