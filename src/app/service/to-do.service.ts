import { ToDoListDTO } from './../dtos/ToDoListDTO';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private readonly API =
    'https://to-do-list-backend-production-cf97.up.railway.app/to-dos';

  constructor(private http: HttpClient) {}

  findAll(): Observable<ToDoListDTO[]> {
    return this.http.get<ToDoListDTO[]>(this.API);
  }
}
