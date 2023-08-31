import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  clearToken: any;

  constructor() { }

  setToken(token: string) {
    localStorage.setItem('authToken', token); 
  }
  

  getToken(): string | null {
    return localStorage.getItem('authToken');
  } 
  
}
