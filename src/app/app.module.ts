import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
