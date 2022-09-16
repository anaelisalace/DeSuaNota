import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared/material.module';
import { AppRouting } from './app.routing';
import { GridListComponent } from './grid-list/grid-list.component';

@NgModule({
  declarations: [AppComponent, GridListComponent],
  imports: [
    AppRouting,
    BrowserModule,
    HttpClientModule,
    SharedMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
