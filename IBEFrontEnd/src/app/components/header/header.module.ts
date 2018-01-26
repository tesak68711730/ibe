import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./header.component";

@NgModule({
  imports: [
      // CommonModule,
      RouterModule,
      BrowserModule,
      BrowserAnimationsModule,
      // ButtonsModule,
      // MatToolbarModule,
      // MatButtonModule,
      // LayoutModule,
      MatMenuModule,
      // MatCardModule,
      // FormsModule,
      // ReactiveFormsModule
      BrowserModule,
      MatMenuModule,
      MatButtonModule,
      BrowserAnimationsModule,
      MatCheckboxModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule {
}
