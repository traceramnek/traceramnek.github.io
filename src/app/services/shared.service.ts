import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Injectable()
export class SharedService {

  constructor(private http: HttpClient, private router: Router) {
  }

  // For string arrays
  getAssetJsonArray(assetUrl: string): Observable<string[]> {
    return this.http.get<string[]>(assetUrl);
  }
  // for single strings
  getAssetJson(assetUrl: string): Observable<string> {
    return this.http.get<string>(assetUrl);
  }

  navigeteToUrl(route: string) {
    // $(document).ready(function() {
    //   $(".parallax-wrapper").animate({
    //       scrollTop: $(".parallax-wrapper").height()
    //     }, 0);
    //   return false;
    // });
    this.router.navigate([route]);
  }


}
