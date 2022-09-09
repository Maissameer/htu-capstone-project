import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // $ => any variable observable
userState$ = this.fireAuth.authState;
  constructor(private fireAuth: AngularFireAuth) { }

signIn( email:string, password: string ){
  //we used from to make it obsirvable from a promise
  return from (this.fireAuth.signInWithEmailAndPassword(email,password)) ;
}

signOut(){
  return from(this.fireAuth.signOut());
}
}
