import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SharedService {

  constructor(private http: HttpClient) {
  }

  // For string arrays
  getAssetJsonArray(assetUrl: string): Observable<string[]> {
    return this.http.get<string[]>(assetUrl);
  }
  // for single strings
  getAssetJson(assetUrl: string): Observable<string> {
    return this.http.get<string>(assetUrl);
  }


}
