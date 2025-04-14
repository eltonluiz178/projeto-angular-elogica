import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../componentes/usuario/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = 'http://localhost:3000/usuarios';
  
  constructor(private http: HttpClient) {}

  buscarUsuarios(): Observable<Usuario[]> {
    const url= `${this.API}`
    return this.http.get<Usuario[]>(url);
  }
}
