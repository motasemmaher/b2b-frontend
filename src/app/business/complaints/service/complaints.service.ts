import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {  BusinessService } from '@app/business/services/business.service';
import { AuthService } from '@app/core/services/auth/auth.service';
@Injectable()
export class ComplaintsService {
  constructor(
    private businessService: BusinessService,
    private auth: AuthService,
  ) { }

  getComplaints(): Observable<any> {
    return this.businessService.get('view-complaints', {
      headers: { authorization: this.auth.token },
    });
  }
}
