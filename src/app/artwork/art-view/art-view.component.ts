import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-art-view',
  templateUrl: './art-view.component.html',
  styleUrls: ['./art-view.component.less']
})
export class ArtViewComponent implements OnInit {

  imagePath: string;
  title: string;

  constructor(private dialogRef: MatDialogRef<ArtViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.imagePath = this.data.imgPath;
    this.title = this.data.title;
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
