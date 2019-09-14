import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { MatDialog } from '@angular/material';
import { ArtViewComponent } from './art-view/art-view.component';


@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.less']
})
export class ArtworkComponent implements OnInit {
  artworks;
  assetUrl = 'assets/json/artwork.json';

  constructor(private sharedService: SharedService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getArtworks();
  }

  getArtworks() {
    this.sharedService.getAssetJsonArray(this.assetUrl).subscribe((response => {
      this.artworks = response['artwork'];
    }));
  }

  openPicDialog(path: string, imgTitle: string) {
    const artConfig = {
      width: '700px',
      maxHeight: '80vh',
      data: { imgPath: path, title: imgTitle }
    }

    const dialogRef = this.dialog.open(ArtViewComponent, artConfig);
  }


}
