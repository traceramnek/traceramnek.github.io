import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    loadChildren: 'app/home/home.module#HomeModule',
  },
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule',
  },
  {
    path: 'projects',
    loadChildren: 'app/projects/projects.module#ProjectsModule',
  },
  // {
  //   path: 'artwork',
  //   loadChildren: 'app/artwork/artwork.module#ArtworkModule',
  // },
  {
    path: 'error',
    loadChildren: 'app/error/error.module#ErrorModule'
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
  })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }