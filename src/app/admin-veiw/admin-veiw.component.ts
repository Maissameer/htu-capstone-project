import { Sector } from './../sector';
import { AdminStartupsComponent } from './../admin-startups/admin-startups.component';
import { ProfileService } from './../profile.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter,Subject, Observable, takeUntil, tap } from 'rxjs';
import { Profile } from '../startups-profile';
import { SectorService } from '../sector.service';
import { AdminSectorsComponent } from '../admin-sectors/admin-sectors.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-admin-veiw',
  templateUrl: './admin-veiw.component.html',
  styleUrls: ['./admin-veiw.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})

export class AdminVeiwComponent implements OnInit {
  panelOpenState = false;

 allProfile$: Observable<Profile[]>;
  selectedProfile?: Profile;
  destroyed$ = new Subject<void>();

  allSectors$: Observable<Sector[]>;
  selectedSector?: Sector;
  destroyeded$ = new Subject<void>();

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyeded$.next();

  }

  constructor(public authService: AuthService, private profileService: ProfileService, private dialog: MatDialog,private sectoreService: SectorService) { }

  ngOnInit(): void {
 this.allProfile$ = this.profileService.getAll();
 this.allSectors$ = this.sectoreService.getAll();

  }

  addProfile() {
    const dialogRef = this.dialog.open(AdminStartupsComponent, {
      data: {},
      width: '75%',
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

  addSector() {
    const dialogRef = this.dialog.open(AdminSectorsComponent, {
      data: {},
      width: '75%',
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((sector) => this.sectoreService.create(sector)),
        takeUntil(this.destroyeded$)// Will force the Observable to complete when destroyed$ emits a value
      )
      .subscribe();
  }

  updateprofile() {
    const dialogRef = this.dialog.open(AdminStartupsComponent, {
      data: { ...this.selectedProfile },
      width: '75%',
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

updatesector() {
  const dialogRef = this.dialog.open(AdminSectorsComponent, {
    data: { ...this.selectedSector },
    width: '75%',
  });
  dialogRef
  .afterClosed()
  .pipe(
    filter(Boolean),
    tap((sector) => this.sectoreService.update(sector)),
    tap((sector) => this.selectProfile(sector))
  )
  .subscribe();
}

selectProfile(profile: Profile) {
  this.selectedProfile = profile;
}

selectSectoe(sector: Sector) {
  this.selectedSector = sector;
}

deleteProfile() {
    // this.profileService.delete(this.selectedProfile!.id);
    // this.selectedProfile = undefined;
}

flip: string = 'inactive';

toggleFlip() {
  this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
}
}




 