import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee.model';
import { ActivatedRoute } from '@angular/router';
import { Empservice } from '../../service/empservice';

@Component({
  selector: 'app-empinfo',
  imports: [CommonModule],
  templateUrl: './empinfo.html',
  styleUrl: './empinfo.css',
})
export class Empinfo {
  eid: number = 0;
  employees: Employee[] = [];
  emp: Employee | undefined;

  constructor(private route: ActivatedRoute, private service: Empservice) {}

  ngOnInit():void {
    this.eid = Number(this.route.snapshot.paramMap.get("eid"));
    this.service.findEmployeeById(this.eid).subscribe({
      next : (emp) => this.emp = emp
    })
    this.findById();
  }

  findById() {
    this.emp = this.employees.find(e => e.eid === this.eid);
  }

}
