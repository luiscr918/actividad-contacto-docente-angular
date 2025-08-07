import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutUsPage } from './pages/about-us-page/about-us-page';
import { ProductosPage } from './pages/productos-page/productos-page';
import { guardianproductosGuard } from './guards/guardianproductos-guard';
import { UsuarioPage } from './pages/usuario-page/usuario-page';
import { Loginpage } from './pages/loginpage/loginpage';
import { guardMatchGuard } from './guards/guard-match-guard';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about-us', component: AboutUsPage },
  {
    path: 'products',
    component: ProductosPage,
    canActivate: [guardianproductosGuard],
  },
  { path: 'registro-usuario', component: UsuarioPage },
  { path: 'login', component: Loginpage },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
