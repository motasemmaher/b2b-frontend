import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  limit = 0;
  skip = 0;
  basedUrl = 'http://localhost:3000/';


  constructor(private http: HttpClient) { }

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
    const basedUrl = this.basedUrl.concat(path)
      .concat(`?limit=${this.limit}`)
      .concat(`&skip=${this.skip}`);
    return this.http.get(basedUrl, options);
  }

  public post(path: string, options?: any, body?: any): Observable<any> {
    const basedUrl = this.basedUrl.concat(path);
    return this.http.post(basedUrl, { options, body });
  }

  public put(path: string, options?: any, body?: any): Observable<any> {
    const basedUrl = this.basedUrl.concat(path);
    return this.http.put(basedUrl, { options, body });
  }

  public patch(path: string, options?: any, body?: any): Observable<any> {
    const basedUrl = this.basedUrl.concat(path);
    return this.http.patch(basedUrl, { options, body });
  }
  public delete(path: string, options?: any, body?: any): Observable<any> {
    const basedUrl = this.basedUrl.concat(path);
    return this.http.delete(basedUrl, options);
  }

}
