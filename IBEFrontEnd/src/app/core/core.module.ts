import { CommonModule } from "@angular/common";
import {SkipSelf, Optional, NgModule} from "@angular/core";
import { HttpErrorHandler} from "./service/http-error-handler";
import { AuthService } from "./service/auth.service";
import { PrivatePageGuard } from "./service/private-page.guard";
import { PublicPageGuard } from "./service/public-page.guard";
import { XHRBackend, Http, RequestOptions, HttpModule } from "@angular/http";
import { JsonHttp } from "./service";


export function createJsonHttp(xhrBackend: XHRBackend, requestOptions: RequestOptions) {
  const ngHttp = new Http(xhrBackend, requestOptions);
  return new JsonHttp(ngHttp);
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [],
  providers: [
    {
      provide: JsonHttp,
      useFactory: createJsonHttp,
      deps: [XHRBackend, RequestOptions]
    },
    HttpErrorHandler,
    AuthService,
    PrivatePageGuard,
    PublicPageGuard,
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
