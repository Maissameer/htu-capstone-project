import { Sector } from './../sector';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profile } from '../startups-profile';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() profile: Profile;
  @Output() updateprofile = new EventEmitter<void>();
  @Output() deleteProfile = new EventEmitter<void>();

  @Input() sector: Sector;
  @Output() updateSector = new EventEmitter<void>();
  @Output() deleteSector = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  update() {
    this.updateprofile.emit();
  }
  updated() {
    this.updateSector.emit();

  }

  delete() {
    this.deleteProfile.emit();
  }

  deleted() {
    this.deleteSector.emit();

  }
}
