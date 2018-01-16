import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  imports: [
    CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent,
  ],
    bootstrap: [HomeComponent]
})
export class HomeModule {
}
