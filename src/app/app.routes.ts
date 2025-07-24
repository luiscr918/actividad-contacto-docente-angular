import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutUsPage } from './pages/about-us-page/about-us-page';
import { ProductosPage } from './pages/productos-page/productos-page';

export const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'about-us', component: AboutUsPage },
  { path: 'products', component: ProductosPage },
  { path: '', redirectTo: '/home', pathMatch:'full' },
];
