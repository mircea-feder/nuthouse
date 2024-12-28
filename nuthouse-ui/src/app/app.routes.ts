import { Routes } from '@angular/router';
import {HomePageComponent} from "./components/pages/home-page/home-page.component";
import {
  TouristAttractionsPageComponent
} from "./components/pages/tourist-attractions-page/tourist-attractions-page.component";
import {AccommodationPageComponent} from "./components/pages/accommodation-page/accommodation-page.component";
import {GalleryPageComponent} from "./components/pages/gallery-page/gallery-page.component";
import {NavHeaderComponent} from "./components/nav-header/nav-header.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'tourist-attractions',
    component: TouristAttractionsPageComponent,
  },
  {
    path: 'accommodation',
    component: AccommodationPageComponent,
  },
  {
    path: 'gallery',
    component: GalleryPageComponent,
  }
];
