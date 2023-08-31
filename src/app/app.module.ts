import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GetProfileComponent } from './components/get-profile/get-profile.component';
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { ValidateProfileComponent } from './validate-profile/validate-profile.component';
import { LoginComponent } from './components/login/login.component';
import { Router } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    GetProfileComponent,
    ValidateProfileComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
