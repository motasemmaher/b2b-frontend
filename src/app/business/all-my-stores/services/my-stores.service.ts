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

  public getMyStore(storeId: string): Observable<any> {
    const path = `stores/${storeId}`;
    return this.businessService.get(path, { headers: { authorization: this.authService.token } });
  }

  /**
   * createCategory
   */
  public createCategory(storeId: string, data: any): Observable<any> {
    const path = `stores/${storeId}/create-category`;
    return this.businessService.post(path, { headers: { authorization: this.authService.token } }, data);
  }
  
  public insertProduct(storeId: string, categoryId: string, data: any): Observable<any> {
    const path = `stores/${storeId}/category/${categoryId}/create-product`;
    return this.businessService.post(path, { headers: { authorization: this.authService.token } }, data);
  }

  public updateProduct(storeId: string, categoryId: string, productId, data: any): Observable<any> {
    const path = `stores/${storeId}/category/${categoryId}/update-product/${productId}`;
    return this.businessService.put(path, { headers: { authorization: this.authService.token } }, data);
  }

  public createOffers(storeId: string, data: any): Observable<any> {
    const path = `stores/${storeId}/offers/add-offer`;
    return this.businessService.post(path, { headers: { authorization: this.authService.token } }, data);
  }
 
  public addNewStore(data: any): Observable<any> {
    const path = 'user/manage-garage-owner/add-store';
    return this.businessService.post(path, { headers: { authorization: this.authService.token } }, data);
  }

  public editStore(storeId: string,data: any): Observable<any> {
    const path = `user/manage-garage-owner/update-store/${storeId}`;
    return this.businessService.put(path, { headers: { authorization: this.authService.token } }, data);
  }

  public getCategories(storeId: string): Observable<any> {
    return this.businessService.get(`stores/${storeId}/categories`);
  }

  getProducts(storeId: string, categoryId?: string, filter?: string): Observable<any> {
    const path = `stores/${storeId}${categoryId ? `/category/${categoryId}` : ''}/products?limit=${this.limit}&skip=${this.skip}${filter ? '&'.concat(filter) : ''}`;
    return this.businessService.get(path);
  }

  getProduct(storeId: string, productId: string): Observable<any> {
    const path = `stores/${storeId}/products/${productId}`;
    return this.businessService.get(path);
  }

  deleteStore(storeId: string): Observable<any> {
    return this.businessService.delete(`user/manage-garage-owner/delete-store/${storeId}`, { headers: { authorization: this.authService.token } });
  }
  
  deleteProduct(storeId: string, categoryId: string, productId: string): Observable<any> {
    return this.businessService.delete(`stores/${storeId}/category/${categoryId}/delete-product/${productId}`, { headers: { authorization: this.authService.token } });
  }
}
