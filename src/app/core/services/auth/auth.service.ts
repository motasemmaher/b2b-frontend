import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { BasedUrlsConstants } from '@app/core/constants/routes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  subject: Subject<{}>;
  basedUrl = BasedUrlsConstants.BASED_URL_LOCALHOST;
  constructor(private http:HttpClient) {
    this.subject = new Subject<any>();
   }

  signUpForGarageOwner(data): Observable<any> {
    return this.http.post(this.basedUrl+ 'user/garage-owner/create', data);
  }
  signUpForCarOwner(data): Observable<any> {
    return this.http.post(this.basedUrl+ 'user/car-owner/create', data);
  }
  login(data): Observable<any> {
    return this.http.post(this.basedUrl+ 'user/login', data);
  }

}
