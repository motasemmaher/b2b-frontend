import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BusinessService } from '@app/business/services/business.service';
import { AuthService } from '@app/core/services/auth/auth.service';

@Injectable()
export class SosService {

  constructor(
    private businessService: BusinessService,
    private authService: AuthService,
  ) { }

  getStoreNearBy(lat: number, long: number): Observable<any> {
    const path = `view-stores/location?lat=${lat}&long=${long}`;
    return this.businessService.get(path, {
      headers: { authorization: this.authService.token },
    });
  }
}
