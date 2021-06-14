import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Profesor } from '../models/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

baseUrl= `${environment.UrlPrincipal}api/profesores`;

constructor(private http:HttpClient) { }

getAll(): Observable<Profesor[]>{
  return this.http.get<Profesor[]>(`${this.baseUrl}`);
}

getById(id: number): Observable<Profesor>{
  return this.http.get<Profesor>(`${this.baseUrl}/${id}`);
}
}
