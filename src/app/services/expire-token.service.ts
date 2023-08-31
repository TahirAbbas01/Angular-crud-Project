import { Injectable } from '@angular/core';
import { GlobalServiceService } from './global-service.service';

@Injectable({
  providedIn: 'root'
})
export class ExpireTokenService {

  private expirationTimer: any; // Timer reference

  constructor(private globalService: GlobalServiceService) {
    this.startExpirationTimer();
  }

  private startExpirationTimer() {
    const token = this.globalService.getToken();
    const expirationDateString = localStorage.getItem('authTokenExpiration');

    if (token && expirationDateString) {
      const expirationDate = new Date(expirationDateString);
      const currentTime = new Date().getTime();
      const timeUntilExpiration = expirationDate.getTime() - currentTime;

      if (timeUntilExpiration > 0) {
        this.expirationTimer = setTimeout(() => {
          this.showTokenExpiredAlert();
          this.globalService.clearToken();
        }, timeUntilExpiration);
      }
    }
  }

  private showTokenExpiredAlert() {
    alert('Token has expired. Please log in again.');
  }
}
