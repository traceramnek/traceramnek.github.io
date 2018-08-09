import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }
  goToProjects() {
    this.router.navigate(['/projects']);
  }
  goToArtwork() {
    this.router.navigate(['/artwork']);
  }

}
