import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  projects;
  assetUrl = 'assets/json/projects.json';

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getProjects();
    
  }

  getProjects() {
    this.sharedService.getAssetJsonArray(this.assetUrl).subscribe((response => {
      this.projects = response['projects'];
    }));
    
  }

}
