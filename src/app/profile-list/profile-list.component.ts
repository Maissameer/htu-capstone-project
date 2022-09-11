import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from './../profile.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import{ Profile} from '../startups-profile'

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  @Input() profile$: Observable<Profile[]>;
  @Output() ProfileEmitter = new EventEmitter<Profile>();

 
 
  //  profiles:  MatTableDataSource<Profile> = new  MatTableDataSource<Profile>([]);
 
 
  constructor(private profileService: ProfileService,private router: Router,
    private route: ActivatedRoute) {
  //  this.profileService.getAll().subscribe((data)=> {
  //   this.profiles.data = data;
  //  })
   }
 id ?: number; 
 
 selectProfile(profile: Profile) {
  this.ProfileEmitter.emit(profile);
}
//  const idFromRoute = this.route.snapshot.paramMap.get('id');
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
   this.profileService.delete(id).then(()=> {
    alert('data was deleted successfully');
   })
    // this.profileService.delete(id).then(()=> {
    //   alert('data was deleted successfully');
    // });
  }
}
