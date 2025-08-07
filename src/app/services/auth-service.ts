import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Usuario } from '../components/interface/usuario';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private APIUSUARIOS = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<Usuario | null> {
    return this.http.get<Usuario[]>(this.APIUSUARIOS).pipe(
      map(
        (usuarios) =>
          usuarios.find(
            (usuario) =>
              usuario.email === email && usuario.password === password
          ) || null
      ),
      tap((usuarioEncontrado) => {
        if (usuarioEncontrado) {
          //guardar el usuario en el localstorage si el login fue exitoso
          localStorage.setItem(
            'usuario_logueado',
            JSON.stringify(usuarioEncontrado)
          );
          return true;
        } else {
          return false;
        }
      })
    );
  }
  sesionIniciada(): boolean {
    return localStorage.getItem('usuario_logueado') !== null;
  }
  obtenerUsuario(): Usuario | null {
    const usuario = localStorage.getItem('usuario_logueado');
    return usuario ? JSON.parse(usuario) : null;
  }
  logOut(): void {
    localStorage.removeItem('usuario_logueado');
  }
}
