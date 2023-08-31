import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { GetProfileComponent } from './components/get-profile/get-profile.component';
import { ValidateProfileComponent } from './validate-profile/validate-profile.component';





const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'getprofile', component: GetProfileComponent },
  { path: 'validateprofile', component: ValidateProfileComponent },

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
