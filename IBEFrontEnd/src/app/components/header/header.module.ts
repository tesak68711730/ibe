import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header.component";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule } from "@angular/material";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { LayoutModule } from "@progress/kendo-angular-layout";

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      BrowserModule,
      BrowserAnimationsModule,
      ButtonsModule,
      MatToolbarModule,
      MatButtonModule,
      LayoutModule,
      MatMenuModule,
      MatCardModule,
      FormsModule,
      ReactiveFormsModule
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
