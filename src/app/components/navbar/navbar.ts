import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public loginService: AuthService, private router: Router) {}

  cerrarSesion = () => {
    this.loginService.logOut();
    this.router.navigate(['/']);
  };
}
