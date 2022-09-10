import { from, Observable } from 'rxjs';
// import { Profile } from './profile.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  delete(id: string) {
    throw new Error('Method not implemented.');
  }
id: number = 2;
 profiles : Profile[] = [
  {
    id: 1,
  userName: 'mais',
  logo: 'logo.com',
  city:'amman',
  category:'printing',
  founderName:'hi',
  employee: 30,
  url: 'dld.com',
  email: 'htu@gmail.com'
}
 ]
getProfiles(): Observable<Profile>{
    return from(this.profiles);
}
 addProfile(profile : Profile){
  profile.id = this.id+1;
  this.profiles.push(profile); 
}

 removeProfile(id: number){
  this.profiles = this.profiles.filter((value)=> {
    value.id != id;
  })
 }

 updateProfile(profile : Profile){
 const indexOfProfile = this.profiles.findIndex((data)=> data.id == profile.id);
 this.profiles[indexOfProfile] = profile;
 }

 getProfile(id : number){
   return this.profiles.filter((data)=> data.id == id)[0];
 }
  constructor() { }
}

export interface Profile {
  id ?: number,
  userName: string,
  logo: string,
  city:string,
  category:string,
  founderName:string,
  employee: number,
  url: string,
  email: string
}