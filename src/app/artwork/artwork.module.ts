import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkComponent } from './artwork.component';
import { ArtViewComponent } from './art-view/art-view.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {path: '', component: ArtworkComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ArtworkComponent,
    ArtViewComponent
  ],
  entryComponents: [
    ArtViewComponent
  ]
})
export class ArtworkModule { }
