import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
  animations: [
    trigger('showSection', [
      state('inactive', style({
        // position: 'absolute',
        height: '0',
        opacity: '0',
        // padding: '0 15%',
        display: 'none',
        // transform: 'translateX(600px)'
      })),
      state('active', style({
        // position: 'relative',
        height: '*',
        opacity: '1',
        // padding: '*',
        // transform: 'translateX(0px)'
      })),
      transition('inactive => active', animate('350ms 350ms ease-in')),
      transition('active => inactive', animate('350ms ease-out'))
    ])
  ]
})
export class AboutComponent implements OnInit {
  navigationSubState = {
    about: "active",
    interests: 'inactive',
    motivations: 'inactive',
    facts: 'inactive'
  };

  constructor() { }

  ngOnInit() {

  }

  toggleActiveStates(menuName: string, event: Event) {
    for (const prop in this.navigationSubState) {
      if (menuName != prop && this.navigationSubState[prop] === 'active') {
        this.navigationSubState[prop] = 'inactive';
      } else {
        this.navigationSubState[menuName] = 'active';
      }
    }
  }

}
