import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-loginpage',
  imports: [RouterLink, FormsModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css',
})
export class Loginpage {
  email: string = '';
  password: string = '';
  error: string = '';
  constructor(private loginService: AuthService, private router: Router) {}
  logearse = () => {
    this.loginService
      .login(this.email, this.password)
      .subscribe((usuarioEncontrado) => {
        if (usuarioEncontrado) {
          const redireccion = localStorage.getItem('redirectUrl') || 'products';
          localStorage.removeItem('redirectUrl');
          this.router.navigateByUrl(redireccion);
        } else {
          this.error = 'Credenciales Incorrectas';
        }
      });
  };
}
