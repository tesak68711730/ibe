import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SearchResultComponent} from "./searchResult.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  imports: [
    CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      NgbModule.forRoot()
  ],
  declarations: [
      SearchResultComponent
  ],
  exports: [
      SearchResultComponent,
  ],
    bootstrap: [SearchResultComponent]
})
export class SearchResultModule {
}
