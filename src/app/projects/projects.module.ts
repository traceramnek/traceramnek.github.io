import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { Routes, RouterModule } from '@angular/router';
import { SlideshowModule } from 'ng-simple-slideshow';

const routes: Routes = [
  {path: '', component: ProjectsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SlideshowModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
