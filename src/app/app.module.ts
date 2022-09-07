import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSectorsComponent } from './admin-sectors/admin-sectors.component';
import { AdminStartupsComponent } from './admin-startups/admin-startups.component';
import { AdminVeiwComponent } from './admin-veiw/admin-veiw.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminApproveComponent } from './admin-approve/admin-approve.component';
import { UesrVeiwComponent } from './uesr-veiw/uesr-veiw.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';


const routes: Route[] = [
  { path: '', redirectTo:'/landing-page', pathMatch: 'full' },
  { path:'landing-page', component: LandingPageComponent},
  { path: 'admin-sectors', component: AdminSectorsComponent },
  { path:'admin-startups', component: AdminStartupsComponent},
  { path:'admin-approve', component: AdminApproveComponent},
  { path:'about-us', component: AboutUsComponent},
  { path:'admin-veiw', component: AdminVeiwComponent},
  { path:'admin-login', component: AdminLoginComponent},
  { path:'user-veiw', component: UesrVeiwComponent},
  { path: '**' , component: PagenotfoundComponent}
  
];
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminSectorsComponent,
    AdminStartupsComponent,
    AdminVeiwComponent,
    LandingPageComponent,
    PagenotfoundComponent,
    AboutUsComponent,
    AdminApproveComponent,
    UesrVeiwComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatExpansionModule,
    MatFormFieldModule,
    MatChipsModule,
    MatMenuModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    ShareButtonsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    ShareIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
