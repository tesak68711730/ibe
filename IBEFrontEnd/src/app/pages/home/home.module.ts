import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  imports: [
      FormsModule,
      CommonModule,
      NgbModule.forRoot()
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
