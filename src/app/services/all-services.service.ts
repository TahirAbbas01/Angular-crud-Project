import { Injectable } from '@angular/core';
import { GlobalServiceService } from './global-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  private profileUrl = 'http://localhost:8080/api/auth/profile';

  constructor(
    private http: HttpClient,
    private globalService: GlobalServiceService
  ) { }

  getProfile(): Observable<any> {
    const token = this.globalService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(this.profileUrl, { headers });
  }


  updateUserProfile(modifiedData: any): Observable<any> {
    const token = this.globalService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    console.log("modifiedData",modifiedData);
    console.log("modifiedDataToken",token);
    const profileUrl = 'http://localhost:8080/api/auth/profile';

    return this.http.put(profileUrl, modifiedData, { headers });
  }

}
