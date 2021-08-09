import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public router: Router) {
    console.log(AOS);
  }

  ngOnInit() {
    AOS.init();
  }

  // @HostListener('window:scroll') // for window scroll events
  // onScroll(event) {
  //   setTimeout(() => {AOS.refresh();}, 500)
  // }

}
