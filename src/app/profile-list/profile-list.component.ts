import { ActivatedRoute, Router } from '@angular/router';
import { Profile, ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';


@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles: any;
element: any;

  //  profiles:  MatTableDataSource<Profile> = new  MatTableDataSource<Profile>([]);
  constructor(private profileService: ProfileService,private router: Router,
    private route: ActivatedRoute) {
    this.profileService.getProfiles().subscribe((data)=> {
      this.profiles.push(data);
    })
   }
 id ?: number; 
 

 const idFromRoute = this.route.snapshot.paramMap.get('id');
 if( idFromRoute: any ){
  this.id = Number(idFromRoute) ;
 }
 
 ngOnInit(): void {
  }

  createStartup(){
    this.router.navigate(['/admin-startups']);

  }

  createSector(){
    this.router.navigate(['/profile/admin-sectors']);

  }

  deleteProfile(id: string){
    //  this.profileService.removeProfile(id);
     console.log(this.profiles.data);
     this.profiles.data = [];
    this.profileService.getProfiles().subscribe((data)=> {
       this.profiles.data.push(data);
   });
    this.profileService.delete(id).then(()=> {
      alert('data was deleted successfully');
    });
  }
}
