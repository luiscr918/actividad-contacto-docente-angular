import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Usuario {
  constructor(private http:HttpClient){}

  UsuarioValido:Usuario[]=[];
  private APIUSUARIOS='http://localhost:3000/usuarios';

 agregarUsuario=(usuario:Usuario)=>{
  this.http.post<Usuario>(this.APIUSUARIOS,usuario);
 }
}
