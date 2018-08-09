import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkComponent } from './artwork.component';

const routes: Routes = [
  {path: '', component: ArtworkComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ArtworkComponent
  ]
})
export class ArtworkModule { }
