import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee.model';
import { RouterLink } from "@angular/router";
import { Empservice } from '../../service/empservice';

@Component({
  selector: 'app-emplist',
  imports: [CommonModule, RouterLink],
  templateUrl: './emplist.html',
  styleUrl: './emplist.css',
})
export class Emplist {
  employees = signal<Employee[]>([]);
  constructor(private empservice: Empservice) {}

  selectedId: number | null = null;

  ngOnInit() {
    this.empservice.findAllEmployees().subscribe({
      next: (data) => {
        this.employees.set(data);
        console.log("Got the data");
        console.log(data);
      } ,
      error(err) {
        alert("Error Encountered ");
        console.log(err);
      }
    })
  }

  showInfo(id: number) {
    this.selectedId = id;
  }

  editEmp(id: number) {
    console.log('Edit Employee:', id);
  }

  deleteEmp(id: number) {
    console.log('Delete Employee:', id);
    this.employees.set(this.employees().filter((e) => e.eid !== id));
  }
}
