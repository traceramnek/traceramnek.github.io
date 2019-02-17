import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
