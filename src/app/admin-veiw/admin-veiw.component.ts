import { AdminStartupsComponent } from './../admin-startups/admin-startups.component';
import { ProfileService } from './../profile.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter,Subject, Observable, takeUntil, tap } from 'rxjs';
import { Profile } from '../startups-profile';

@Component({
  selector: 'app-admin-veiw',
  templateUrl: './admin-veiw.component.html',
  styleUrls: ['./admin-veiw.component.css']
})

export class AdminVeiwComponent implements OnInit {
 allProfile$: Observable<Profile[]>;
  selectedProfile?: Profile;
  destroyed$ = new Subject<void>();

  ngOnDestroy() {
    this.destroyed$.next();
  }

  constructor(public authService: AuthService, private profileService: ProfileService, private dialog: MatDialog) { }

  ngOnInit(): void {
 this.allProfile$ = this.profileService.getAll();
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
        tap((profile) => this.profileService.create(profile)),
        takeUntil(this.destroyed$)// Will force the Observable to complete when destroyed$ emits a value
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
  //  this.profileService.delete(this.selectedProfile!.id);
  //  this.selectedProfile = undefined;
}


}
 