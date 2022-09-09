import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'try';

  constructor(private router: Router, public authService: AuthService){}

  logout(){
    this.authService.signOut().subscribe(()=> {
      this.router.navigate(['']);
    });
  }
}
