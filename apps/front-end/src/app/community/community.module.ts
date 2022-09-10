import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CommunityComponent } from './community.component';


const routes: Routes = [
  { path: '', component: CommunityComponent }
];

@NgModule({
  declarations: [
    CommunityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CommunityModule { }
