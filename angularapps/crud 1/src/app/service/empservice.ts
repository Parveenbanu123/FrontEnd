import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class Empservice {
  constructor(private http: HttpClient) {}

  findAllEmployees() {
    return this.http.get<Employee[]>(`${BASE_URL}/employees`);
  }

  findEmployeeById(id: number) : Observable<Employee> {
	return this.http.get<Employee>(`${BASE_URL}/employees/${id}`);
  }

  saveEmployee(emp: Employee) : Observable<Employee> {
	return this.http.post<Employee>(`${BASE_URL}/employees`,emp);
  }

  updateEmployeeById(eid: number ,emp : Employee) : Observable<Employee> {
	return this.http.post<Employee>(`${BASE_URL}/employees/${eid}`,emp)
  }

  deleteById(eid : number) {
	return this.http.delete<void>(`${BASE_URL}/employees/${eid}`);
  }
}
