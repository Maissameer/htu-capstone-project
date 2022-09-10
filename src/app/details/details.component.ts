import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // this.form.statusChanges.subscribe((data)=> ){
  //   this.statusChanges.push(data);
  //   console.log(this.statusChanges)
  // }
  // this.form.valueChanges.subscribe((data)=> ){
  //   this.valueChanges.push(data);
  // }


}
