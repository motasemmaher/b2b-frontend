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

// import jwt from 'jsonwebtoken';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // subject: Subject<{}>;
  basedUrl = BasedUrlsConstants.BASED_URL_LOCALHOST;
  // private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  token: string;
  user: any;

  constructor(
    private router: Router,
    private tokenHandlerService: TokenHandlerService,
    private http: HttpClient,
    private toastService: ToastService
  ) {
    // this.subject = new Subject<any>();
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
    return this.http.post(this.basedUrl + 'auth/garage-owner/create', data);
  }
  signUpForCarOwner(data): Observable<any> {
    return this.http.post(this.basedUrl + 'auth/car-owner/create', data);
  }

  logout() {
    this.http.delete(this.basedUrl + 'user/logout').subscribe(() => {
      localStorage.removeItem('access_token');
      this.user = null;
      this.token = null;
      this.router.navigateByUrl(`/${AppRoutingConstants.AUTH}`);
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
    alert('dfaddf')
    // if (error.error instanceof ErrorEvent) {
    //   // A client-side or network error occurred. Handle it accordingly.
    //   console.error("An error occurred:", error.error.message);
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong,
    //   console.error(
    //     `Backend returned code ${error.status}, ` + `body was: ${error.error}`
    //   );
    // }
    // throwError('Something bad happened; please try aga<  in later.')
    // return an observable with a user-facing error message
    this.toastService.presentToastWithOptions("error", error.error.Error || error.error, "danger");
    return throwError('Something bad happened; please try aga<  in later.');
  }
}
