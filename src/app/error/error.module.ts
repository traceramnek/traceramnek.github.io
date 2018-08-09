import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ErrorComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ErrorComponent
  ]
})
export class ErrorModule { }
