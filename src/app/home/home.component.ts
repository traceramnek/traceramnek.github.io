import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { KUtils } from '../util/k-utils';

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
    // window.scroll(0,0);
    this.sharedService.navigateToUrl(route);
  }

  scrollToElem(id){
    KUtils.scrollElemIntoView(id);
  }

  adjustDivs(event) {
    let motionDiv = document.getElementById('id-motion-container');
    let leftDiv = document.getElementById('id-left-div');
    let rightDiv = document.getElementById('id-right-div');

    leftDiv.style.transition = '0s';
    rightDiv.style.transition = '0s';

    leftDiv.style.width = 'calc(100% - ' + event.clientX + 'px';
    leftDiv.style.fontSize = (event.clientX / motionDiv.clientWidth) * 100 + 300 + '%';
    rightDiv.style.width = event.clientX + 'px';
    rightDiv.style.fontSize = ((motionDiv.clientWidth - event.clientX) / motionDiv.clientWidth) * 100 + 300 + '%';

    if(leftDiv.clientWidth > rightDiv.clientWidth){
      leftDiv.style.zIndex = '2';
      rightDiv.style.zIndex = '1';
    } else {
      rightDiv.style.zIndex = '2';
      leftDiv.style.zIndex = '1';
    }

  }

  resetDivs(){
    let leftDiv = document.getElementById('id-left-div');
    let rightDiv = document.getElementById('id-right-div');

    leftDiv.style.transition = '.25s';
    rightDiv.style.transition = '.25s';
    leftDiv.style.width = '100%';
    rightDiv.style.width = '100%';
  }

}
