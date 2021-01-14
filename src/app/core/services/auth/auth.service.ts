import { Injectable, Pipe } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { BasedUrlsConstants } from '@app/core/constants/routes';
import { Router } from '@angular/router';
import {
  AppRoutingConstants,
  BusinessRoutingConstants,
} from '@app/core/constants/routes';
import { TokenHandlerService } from '@app/core/services/token-handler/token-handler.service';
import { catchError } from 'rxjs/operators';
import { ToastService } from '@app/shared/toaster/toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  basedUrl = BasedUrlsConstants.BASED_URL_LOCALHOST;
  token: string;
  user: any;

  constructor(
    private router: Router,
    private tokenHandlerService: TokenHandlerService,
    private http: HttpClient,
    private toastService: ToastService
  ) {
    this.getData();
  }

  getData() {
    if (localStorage.getItem('access_token')) {
      if (this.tokenHandlerService.isTokenValid(localStorage.getItem('access_token'))) {
        this.token = localStorage.getItem('access_token');
        this.user = this.tokenHandlerService.getPayload(this.token);
      }
    }
  }

  userInfo(): any {
    return this.user;
  }

  isHasRole(role): boolean {
    return this.user && this.user.role === role;
  }

  getRole() {
    return (this.user && this.user.role) || 'guest';
  }
  getUsername() {
    return (this.user && this.user.username) || 'guest';
  }
  signUpForGarageOwner(data): Observable<any> {
    return this.http.post(this.basedUrl + 'auth/garage-owner/create', data).pipe(catchError((error) => this.error(error)));
  }
  signUpForCarOwner(data): Observable<any> {
    return this.http.post(this.basedUrl + 'auth/car-owner/create', data).pipe(catchError((error) => this.error(error)));
  }

  logout() {
    this.http.delete(this.basedUrl + 'user/logout').subscribe(() => {
      localStorage.removeItem('access_token');
      this.user = null;
      this.token = null;
      window.location.href = `/${AppRoutingConstants.AUTH}`;
      // this.router.navigateByUrl(`/${AppRoutingConstants.AUTH}`);
    });
  }

  clearDate() {
    localStorage.removeItem('access_token');
    this.user = null;
    this.token = null;
  }
  login(data) {
    this.http
      .post(this.basedUrl + 'user/login', data)
      .pipe(catchError((error) => this.error(error)))
      .subscribe(async (res: any) => {
        if (res.auth) {
          localStorage.setItem('access_token', res.token);
          this.token = res.token;
          this.user = this.tokenHandlerService.getPayload(this.token);
          this.router.navigateByUrl(`/${AppRoutingConstants.BUSINESS}`);
        } else {
        }
      });
  }

  public get loggedIn(): boolean {
    return this.token && this.tokenHandlerService.isTokenValid(this.token);
  }

  public error(error: HttpErrorResponse) {
    this.toastService.presentToastWithOptions('error', error.error.error, 'danger');
    return throwError('Something bad happened; please try aga<  in later.');
  }
}
