import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PetService} from './pet.service';
import { UserService} from './user.service';
import { AuthService} from './auth.service';
import { AlertService} from './alert.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar.component';

// import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    UserComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [PetService, UserService, AuthService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }



