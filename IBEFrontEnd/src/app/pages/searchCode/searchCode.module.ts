import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchCodeComponent} from "./searchCode.component";


@NgModule({
  imports: [
      BrowserModule,
      MatMenuModule,
      MatButtonModule,
      BrowserAnimationsModule,
      MatButtonModule, MatCheckboxModule
  ],
  declarations: [
      SearchCodeComponent
  ],
  exports: [
      SearchCodeComponent,
  ],
    bootstrap: [SearchCodeComponent]
})
export class SearchCodeModule {
}
