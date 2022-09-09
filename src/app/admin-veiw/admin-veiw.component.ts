import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-veiw',
  templateUrl: './admin-veiw.component.html',
  styleUrls: ['./admin-veiw.component.css']
})
export class AdminVeiwComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
 