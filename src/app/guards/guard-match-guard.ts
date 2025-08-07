import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const guardMatchGuard: CanMatchFn = (route, segments) => {
  const loginServicio = inject(AuthService);
  return !loginServicio.sesionIniciada();
};
