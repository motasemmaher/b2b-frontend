import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BusinessService } from '@app/business/services/business.service';
import { SharedConstants } from '@app/core/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private businessService: BusinessService,
  ) { }

  path: string = `${SharedConstants.SEARCH}`;
  
  search(searchFor: string, filters?: string): Observable<any> {
    this.path = this.path.concat('?search=').concat(searchFor).concat('&filter=products').concat(filters || '');
    return this.businessService.get(this.path);
  }
}
