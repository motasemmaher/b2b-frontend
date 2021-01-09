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
  limit = 30;
  skip = 0;
  basedUrl = BasedUrlsConstants.BASED_URL_LOCALHOST;

  constructor(private http: HttpClient, private toastService: ToastService) {}

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
  public get(path: string, options?: any): Observable<any> {
    const basedUrl = this.basedUrl.concat(path);
    // .concat(`?limit=${this.limit}`)
    // .concat(`&skip=${this.skip}`);
    return this.http.get(basedUrl, options).pipe(catchError(this.error));
  }

  public post(path: string, options?: any, body?: any): Observable<any> {
    const basedUrl = this.basedUrl.concat(path);
    return this.http
      .post(basedUrl, body, { ...options })
      .pipe(catchError(this.error));
  }

  public put(path: string, options?: any, body?: any): Observable<any> {
    const basedUrl = this.basedUrl.concat(path);
    return this.http.put(basedUrl, body, options).pipe(catchError(this.error));
  }

  public patch(path: string, options?: any, body?: any): Observable<any> {
    const basedUrl = this.basedUrl.concat(path);
    return this.http.patch(basedUrl, body, options).pipe(catchError(this.error));
  }
  public delete(path: string, options?: any): Observable<any> {
    const basedUrl = this.basedUrl.concat(path);
    return this.http.delete(basedUrl, options).pipe(catchError(this.error));
  }

  private error(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // throwError('Something bad happened; please try aga<  in later.')
    // return an observable with a user-facing error message
    this.toastService.presentToastWithOptions('error', error.error, 'danger');
    return throwError('Something bad happened; please try aga<  in later.');
  }
}
