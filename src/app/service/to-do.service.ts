import { ToDoListDTO } from './../dtos/ToDoListDTO';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private readonly api =
    'https://to-do-list-backend-production-cf97.up.railway.app/to-dos';

  constructor(private http: HttpClient) {}

  findAll(): Observable<ToDoListDTO[]> {
    return this.http.get<ToDoListDTO[]>(this.api);
  }

  done(id: number): Observable<void> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.put<void>(`${this.api}`, params);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
