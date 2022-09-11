import { AdminStartupsComponent } from './../admin-startups/admin-startups.component';
import { ProfileService } from './../profile.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, Observable, tap } from 'rxjs';
import { Profile } from '../startups-profile';

@Component({
  selector: 'app-admin-veiw',
  templateUrl: './admin-veiw.component.html',
  styleUrls: ['./admin-veiw.component.css']
})

export class AdminVeiwComponent implements OnInit {
  profile$: Observable<Profile[]>;
  selectedProfile: Profile;
  constructor(public authService: AuthService, private profileService: ProfileService, private dialog: MatDialog) { }

  ngOnInit(): void {
 this.profile$ = this.profileService.getAll();
  }

  addProfile() {
    const dialogRef = this.dialog.open(AdminStartupsComponent, {
      data: {},
      width: '40%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((profile) => this.profileService.create(profile))
      )
      .subscribe();
  }

  updateprofile() {
    const dialogRef = this.dialog.open(AdminStartupsComponent, {
      data: { ...this.selectedProfile },
      width: '40%',
    });
    dialogRef
    .afterClosed()
    .pipe(
      filter(Boolean),
      tap((profile) => this.profileService.update(profile)),
      tap((profile) => this.selectProfile(profile))
    )
    .subscribe();
}

selectProfile(profile: Profile) {
  this.selectedProfile = profile;
}

deleteProfile() {
  // this.profileService.delete(this.selectProfile!.id);
  // this.selectProfile = undefined;
}


}
 