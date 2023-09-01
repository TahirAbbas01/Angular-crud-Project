import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem('authToken', token); 
  }
  

  getToken(): string | null {
    return localStorage.getItem('authToken');
  } 
  
}
