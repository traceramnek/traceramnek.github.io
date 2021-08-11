import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  projects = [];
  artworks = [];
  artUrls = [];
  assetUrl = 'assets/json/projects.json';
  artFetchUrl = 'assets/json/artwork.json';

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getProjects();
    this.getArtworks();
  }

  getProjects() {
    this.sharedService.getAssetJsonArray(this.assetUrl).subscribe((response => {
      this.projects = response['projects'];
    }));

  }

  getArtworks() {
    this.sharedService.getAssetJsonArray(this.artFetchUrl).subscribe((response => {
      this.artworks = response['artwork'];
      this.artUrls = this.artworks.map(elem => elem.imgPath);
    }));
  }

}
