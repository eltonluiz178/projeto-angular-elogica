import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pensamento } from '../interfaces/pensamento';
import { RetornoPaginado } from '../interfaces/retornoPaginado';

@Injectable({
  providedIn: 'root'
})
export class MuralService {
  private readonly API = 'https://localhost:7094/pensamentos';

  constructor(private http: HttpClient) { }

  obterPensamentos(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API);
  }

  obterPensamentosPaginados(pagina: number, quantidade: number): Observable<RetornoPaginado>{
    const url = `${this.API}/${pagina}/${quantidade}`
    return this.http.get<RetornoPaginado>(url);
  }

  adicionarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  editarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    const url= `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento);
  }

  excluirPensamento(id: number): Observable<Pensamento>{
    const url= `${this.API}/${id}`
    return this.http.delete<Pensamento>(url);
  }
}
