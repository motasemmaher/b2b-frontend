import { Injectable } from '@angular/core';
import { BusinessService } from '@app/business/services/business.service';
import { Observable } from 'rxjs';
import { AuthService } from '@app/core/services/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class MyStoresService {

  limit = 30;
  skip = 0;

  constructor(private businessService: BusinessService, private authService: AuthService) { }

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

  public getMyStores(): Observable<any> {
    const path = `user/manage-garage-owner/stores?limit=${this.limit}&skip=${this.skip}`;
    return this.businessService.get(path, { headers: { authorization: this.authService.token } });
  }

  /**
   * createCategory
   */
  public createCategory(storeId: string, data): Observable<any> {
    const path = `stores/${storeId}/create-category`;
    return this.businessService.post(path, { headers: { authorization: this.authService.token } }, data);
  }
  public insertProduct(storeId: string, categoryId, data): Observable<any> {
    const path = `stores/${storeId}/category/${categoryId}/create-product`;
    return this.businessService.post(path, { headers: { authorization: this.authService.token } }, data);
  }

  public getCategories(storeId): Observable<any> {
    return this.businessService.get(`stores/${storeId}/categories`)
  }
}
