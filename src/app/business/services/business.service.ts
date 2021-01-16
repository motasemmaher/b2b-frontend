import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { BasedUrlsConstants } from '@app/core/constants/routes';
import { catchError } from 'rxjs/operators';
import { ToastService } from '@app/shared/toaster/toast.service';
@Injectable({
  providedIn: 'any',
})
export class BusinessService {

  basedUrl = BasedUrlsConstants.BASED_URL_LOCALHOST;

  constructor(private http: HttpClient, private toastService: ToastService) { }

  public get(path: string, options?: any): Observable<any> {
    const basedUrl = this.basedUrl.concat(path);

    return this.http.get(basedUrl, options).pipe(catchError((error) => this.error(error)));
  }

  public post(path: string, options?: any, body?: any): Observable<any> {
    const basedUrl = this.basedUrl.concat(path);
    return this.http
      .post(basedUrl, body, { ...options })
      .pipe(catchError((error) => this.error(error)));
  }

  public put(path: string, options?: any, body?: any): Observable<any> {
    const basedUrl = this.basedUrl.concat(path);
    return this.http.put(basedUrl, body, options).pipe(catchError((error) => this.error(error)));
  }

  public patch(path: string, options?: any, body?: any): Observable<any> {
    const basedUrl = this.basedUrl.concat(path);
    return this.http.patch(basedUrl, body, options).pipe(catchError((error) => this.error(error)));
  }
  public delete(path: string, options?: any): Observable<any> {
    const basedUrl = this.basedUrl.concat(path);
    return this.http.delete(basedUrl, options).pipe(catchError((error) => this.error(error)));
  }

  private error(error: HttpErrorResponse) {
    console.log(error)
    this.toastService.presentToastWithOptions('error', error.error.error, 'danger');
    return throwError('Something bad happened; please try aga<  in later.');
  }
}
