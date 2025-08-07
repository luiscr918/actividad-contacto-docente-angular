import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Usuario {
  constructor(private http:HttpClient){}


  private APIUSUARIOS='http://localhost:3000/usuarios';

 agregarUsuario=(usuario:Usuario):Observable<Usuario>=>{
  return this.http.post<Usuario>(`${this.APIUSUARIOS}`,usuario)
 
 };
}
