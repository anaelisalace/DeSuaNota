import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SatisfactionComponent } from './satisfaction.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    SatisfactionComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ], 
  exports: [ 
    SatisfactionComponent
  ]
})
export class SatisfactionModule { }

