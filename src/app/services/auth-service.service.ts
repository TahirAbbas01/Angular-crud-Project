import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalServiceService } from './global-service.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private globalService: GlobalServiceService
  ) { }

  signup(email: string, password: string): Observable<any> {
    const signupData = {
      userName: email,
      password: password
    };

    console.log("signup-data", signupData);

    return this.http.post('http://localhost:8080/api/auth/register', signupData);
  }

  login(email: string, password: string): Observable<any> {
    const loginData = {
      userName: email,
      password: password
    };
  
    return this.http.post('http://localhost:8080/api/auth/login', loginData);
  }



  
  


  
}
