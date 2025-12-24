import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Empservice } from '../../services/empservice';

@Component({
  selector: 'app-addemp',
  imports: [FormsModule,CommonModule],
  templateUrl: './addemp.html',
  styleUrl: './addemp.css',
})
export class Addemp {
  employee:Employee={}as Employee;
  emplist:Employee[]=[];
  constructor(private router:Router,private service:Empservice){}
  ngOnInit():void{
    this.emplist=[new Employee(338,"Parveen","Developer","parveen123@gmail.com","9876543210",40000,"IT"),
      new Employee(349,"Sathis","Developer","sathis123@gmail.com","9876543210",50000,"IT"),
      new Employee(347,"Saranya","Tester","saranya123@gmail.com","9876543210",45000,"Testing")
    ]
    
  }
  onSubmit(empform:NgForm){
    event?.preventDefault();
    if(empform.invalid) return
    let emp=empform.value
    this.employee=new Employee(emp.eid,emp.ename,emp.desg,emp.email,emp.mobile,emp.salary,emp.dept);
    
    //this.emplist.push(this.employee)
    this.service.save(this.employee).subscribe(()=>{
      console.log(this.employee)
    })
    //console.log(this.employee)
    //this.emplist.forEach(emp=>console.log(emp))
    //alert("Form Submitted Successfully,Employee added")
    this.router.navigate(['/emp/list'])
  }

}
