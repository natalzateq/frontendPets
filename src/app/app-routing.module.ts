import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';



import {PetComponent} from './pet/pet.component';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },
   { path: 'pet', component: PetComponent },
   { path: 'user', component: UserComponent },
   { path: 'login', component: LoginComponent },
   { path: 'dashboard', component: DashboardComponent },
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   // { path: '/', component: LoginComponent },





];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []

})



export class AppRoutingModule { }




