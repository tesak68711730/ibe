import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from "@angular/router";
import { ENV_PROVIDERS } from "./environment";
import { AppComponent } from './app.component';
import { CoreModule } from "./core";
import { HomeModule } from "./pages/home/home.module";
import { LoginModule } from "./pages/login/login.module";
import { HeaderModule } from "./components/header/header.module";
import { removeNgStyles, createInputTransfer, createNewHosts } from "@angularclass/hmr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ROUTES } from "./app.routes";
import {AboutModule} from "./pages/about/about.module";
import {FooterModule} from "./components/footer/footer.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot(ROUTES ,{
      preloadingStrategy: PreloadAllModules
    }),
    HeaderModule,
    LoginModule,
    HomeModule,
    AboutModule,
      FooterModule
  ],
  providers: [ENV_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {
  }

  hmrOnInit(store) {
    if (!store || !store.state) return;
    console.log('HMR store', store);
    console.log('store.state.data:', store.state.data);
    // inject AppStore here and update it
    // this.AppStore.update(store.state)
    if ('restoreInputValues' in store) {
      store.restoreInputValues();
    }
    // change detection
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // inject your AppStore and grab state then set it on store
    // var appState = this.AppStore.get()
    store.state = {data: 'yolo'};
    // store.state = Object.assign({}, appState)
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
    // anything you need done the component is removed
  }
}
