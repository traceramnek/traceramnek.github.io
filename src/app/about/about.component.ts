import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
  animations: [
    trigger('showSection', [
      state('inactive', style({
        height: '0',
        opacity: '0',
        padding: '0 15%'
      })),
      state('active', style({
        height: '*',
        opacity: '1',
        padding: '*'
      })),
      transition('inactive => active', animate('500ms 650ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class AboutComponent implements OnInit {
  navigationSubState: { [menu: string]: string } = {
    interests: 'inactive',
    motivations: 'inactive',
    facts: 'inactive'
  };

  constructor() { }

  ngOnInit() {
  }


  toggleNavigationSub(menuName: string, event: Event) {
    event.preventDefault();
    this.setActiveStates(menuName);

    this.navigationSubState[menuName] = (this.navigationSubState[menuName] === 'inactive' ? 'active' : 'inactive');

  }

  setActiveStates(menuName: string) {
    switch (menuName) {
      case 'interests':
        this.navigationSubState.motivations = 'inactive';
        this.navigationSubState.facts = 'inactive';
        break;
      case 'motivations':
        this.navigationSubState.facts = 'inactive';
        this.navigationSubState.interests = 'inactive';
        break;
      case 'facts':
        this.navigationSubState.motivations = 'inactive';
        this.navigationSubState.interests = 'inactive';
        break;
    }

  }

}
