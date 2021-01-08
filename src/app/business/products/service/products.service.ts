import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessService } from '@app/business/services/business.service';
@Injectable()
export class ProductsService {
  limit = 30;
  skip = 0;

  constructor(private businessService: BusinessService) { }

  public setLimit(limit: number): boolean {
    this.limit = limit;
    return true;
  }

  public setSkip(skip: number): boolean {
    this.skip = skip;
    return true;
  }

  public setBothDataSkipAndLimit(limit: number, skip: number): boolean {
    this.limit = limit;
    this.skip = skip;
    return true;
  }

  public resetBothDateSkipAndLimit(): boolean {
    this.limit = 30;
    this.skip = 0;
    return true;
  }

  public getLimit(): number {
    return this.limit;
  }

  public getSkip(): number {
    return this.skip;
  }

  getProducts(filter?: string): Observable<any>{
    const path = `products?limit=${this.limit}&skip=${this.skip}`;
    return this.businessService.get(path);
  }
}
