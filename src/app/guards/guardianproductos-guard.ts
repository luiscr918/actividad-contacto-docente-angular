import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const guardianproductosGuard: CanActivateFn = (route, state) => {
  const servicioLogin = inject(AuthService);
  const router = inject(Router);
  if (servicioLogin.sesionIniciada()) {
    return true;
  } else {
    localStorage.setItem('redirectUrl', state.url);
    return router.parseUrl('/login');
  }
};
