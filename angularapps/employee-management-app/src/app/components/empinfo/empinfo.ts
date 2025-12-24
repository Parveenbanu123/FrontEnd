import { Component, signal } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { ActivatedRoute } from '@angular/router';
import { Empservice } from '../../services/empservice';

@Component({
  selector: 'app-empinfo',
  imports: [],
  templateUrl: './empinfo.html',
  styleUrl: './empinfo.css',
})
export class Empinfo {

  empid!: number; 
  emp = signal<Employee | null>(null); 
  constructor(private route: ActivatedRoute, private service: Empservice) {} 
  ngOnInit(): void { 
    this.empid = Number(this.route.snapshot.paramMap.get('eid')); 
    this.service.findByid(this.empid).subscribe((data: Employee) => { this.emp.set(data); 
     }); }

 
    }
  

