import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BasedUrlsConstants } from '@app/core/constants/routes';
import { generateId } from '@app/shared/functions/generate-id';


@Injectable({
  providedIn: 'root'
})
export class SearchByImageService {

  baseUrl: string = BasedUrlsConstants.BASED_URL_SEARCH_BY_IMAGE


  constructor(
    private http: HttpClient
  ) { }

    base64ToArrayBuffer(base64:string) {
      var binary_string = atob(base64);
      var len = binary_string.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
          bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes.buffer;
  }


  searchByImage(image:string): Observable<any> {
    const name = generateId();
    console.log(image.split('base64,')[1])
    return this.http.post(`${this.baseUrl}/get-image-name/${name}`, {img: image.split('base64,')[1]}, {headers: {contentType: "multipart/form-data", processData: "false",}});
  }
}
