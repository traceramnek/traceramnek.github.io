import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.less']
})
export class ArtworkComponent implements OnInit {
  artworks;
  assetUrl = 'assets/json/artwork.json';

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getArtworks();
  }

  getArtworks() {
    this.sharedService.getAssetJsonArray(this.assetUrl).subscribe((response => {
      this.artworks = response['artwork'];
  }));
    
  }

}
