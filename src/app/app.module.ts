import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from 'src/environments/environment';
import { MaincardsComponent } from './maincards/maincards.component';
import { HomeComponent } from './home/home.component';
import { HealthstatusComponent } from './healthstatus/healthstatus.component';
import { MetaComponent } from './meta/meta.component';
import { MetricsComponent } from './metrics/metrics.component';
import { AdminHealthComponent } from './admin/admin-health/admin-health.component';
import {RouterModule} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    MaincardsComponent,
    HomeComponent,
    HealthstatusComponent,
    MetaComponent,
    MetricsComponent,
    AdminHealthComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([

      {path : '', component:HomeComponent},
      {path : 'healthstatus', component:HealthstatusComponent},
      {path : 'meta', component:MetaComponent,canActivate : [AuthGuardService]},
      {path : 'metrics', component:MetricsComponent,canActivate : [AuthGuardService]},
      {path : 'login', component:LoginComponent, canActivate : [AuthGuardService]},
      {path : 'admin/health', component:AdminHealthComponent,canActivate : [AuthGuardService]}

    ])


  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
