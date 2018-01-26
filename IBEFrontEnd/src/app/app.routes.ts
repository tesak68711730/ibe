import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import {PublicPageGuard} from "./core/service/public-page.guard";
import {PrivatePageGuard} from "./core/service/private-page.guard";
import {AboutComponent} from "./pages/about/about.component";
import {SearchCodeComponent} from "./pages/searchCode/searchCode.component";
import {SearchResultComponent} from "./pages/searchResults/searchResult.component";

export const ROUTES: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [PublicPageGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [PrivatePageGuard]
  },
  {
    path: 'searchCode',
    component: SearchCodeComponent,
    canActivate: [PrivatePageGuard]
  },
  {
    path: 'searchResult',
    component: SearchResultComponent,
    canActivate: [PrivatePageGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [PrivatePageGuard]
  },
    { path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }

];
