import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
  animations: [
    trigger('showSection', [
      // state('inactive', style({
      //   height: '0',
      //   opacity: '0',
      //   padding: '0 15%',
      // })),
      // state('active', style({
      //   height: '*',
      //   opacity: '1',
      //   padding: '*',
      // })),
      // transition('inactive => active', animate('500ms 500ms ease-in')),
      // transition('active => inactive', animate('350ms ease-out'))
    ])
  ]
})
export class AboutComponent implements OnInit {
  navigationSubState = {
    interests: 'inactive',
    motivations: 'inactive',
    facts: 'inactive'
  };

  constructor() { }

  ngOnInit() {
  
  }

  toggleActiveStates(menuName: string, event: Event) {
    event.preventDefault();
    for (const prop in this.navigationSubState) {
      if (menuName != prop) {
        this.navigationSubState[prop] = 'inactive';
        $('#' + prop).hide(500);
      } else {
        this.navigationSubState[prop] = (this.navigationSubState[prop] === 'inactive' ? 'active' : 'inactive');
        $('#' + menuName).slideToggle(500);
      }
    }

  }

}
