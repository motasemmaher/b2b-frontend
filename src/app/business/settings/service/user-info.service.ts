import { Observable } from 'rxjs';
import { BusinessService } from '../../services/business.service';
import { Injectable } from '@angular/core';
import { AuthService } from '@app/core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(
    private auth:AuthService,
    private businessService: BusinessService
  ) { }

  getUserInfo(userId: any): Observable<any> {
    
    return;
  }

  setUserInfo(userId: any, data: any): Observable<any>{
    
    return;
  }

}
