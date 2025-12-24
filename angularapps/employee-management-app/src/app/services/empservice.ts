import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

const BASE_URL = "http://localhost:4000/emplist";

@Injectable({
  providedIn: 'root',
})
export class Empservice {

  constructor(private http: HttpClient) {}

  findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(BASE_URL);
  }

  save(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(BASE_URL, emp);
  }

  findByid(eid: number): Observable<Employee> {
    return this.http.get<Employee>(`${BASE_URL}/${eid}`);
  }

  update(eid: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${BASE_URL}/${eid}`, employee);
  }

  delete(eid: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/${eid}`);
  }
}
