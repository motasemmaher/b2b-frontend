import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BusinessService } from '@app/business/services/business.service';
import { AuthService } from '@app/core/services/auth/auth.service';
@Injectable({
  providedIn: 'root',
})
export class CarsService {
  limit = 5;
  skip = 0;
  constructor(
    private businessService: BusinessService,
    private authService: AuthService
  ) {}

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

  public resetBothDataSkipAndLimit(): boolean {
    this.limit = 5;
    this.skip = 0;
    return true;
  }

  public getLimit(): number {
    return this.limit;
  }

  public getSkip(): number {
    return this.skip;
  }


  getMyCars(): Observable<any> {
    return this.businessService.get(`user/manage-car-owner/cars?limit=${this.limit}&skip=${this.skip}`, {
      headers: { authorization: this.authService.token },
    });
  }

  addNewCar(data: any): Observable<any> {
    return this.businessService.post(
      'user/manage-car-owner/add-car',
      {
        headers: { authorization: this.authService.token },
      },
      data
    );
  }

  deleteCar(carId: string): Observable<any> {
    return this.businessService.delete(
      `user/manage-car-owner/delete-car/${carId}`,
      {
        headers: { authorization: this.authService.token },
      }
    );
  }

  editCar(carId: string, data: any): Observable<any> {
    return this.businessService.put(
      `user/manage-car-owner/update-car/${carId}`,
      {
        headers: { authorization: this.authService.token },
      },
      data
    );
  }
}
