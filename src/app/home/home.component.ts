import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
  }

  goToPage(route: string) {
    this.sharedService.navigeteToUrl(route);
  }

}
