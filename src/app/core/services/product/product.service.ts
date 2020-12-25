import { Injectable } from '@angular/core';
import { BusinessService } from '@app/business/services/business.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private businessService: BusinessService) { }

  getProduct(productsId): Observable<any> {
    return this.businessService.get(`products/${productsId}`);
  }
}
