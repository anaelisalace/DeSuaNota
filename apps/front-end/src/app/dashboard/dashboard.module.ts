import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedMaterialModule } from '../shared/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { CardsComponent } from './cards/cards.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChartModule } from '../shared/chart/chart.module';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent, CardsComponent],
  imports: [
    SharedMaterialModule,
    ChartModule,
    CommonModule,
    LayoutModule,
    SharedMaterialModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class DashboardModule {}
