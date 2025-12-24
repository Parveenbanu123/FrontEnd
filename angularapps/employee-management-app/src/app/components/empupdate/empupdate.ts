import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {  FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Empservice } from '../../services/empservice';

@Component({
  selector: 'app-empupdate',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './empupdate.html',
  styleUrl: './empupdate.css',
})
export class Empupdate {
  empform: FormGroup;
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private router:Router,private service:Empservice){
    this.empform=fb.group({
      eid:[{value:0,disabled:true}],
      ename:['',[Validators.required,Validators.minLength(3)]],
      desg:['',Validators.required],
      email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$")]],
      mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      salary:[0,[Validators.required,Validators.min(1000)]],
      dept:['',Validators.required]
    })
  }

  employee = signal<Employee | null>(null);
  //employee:Employee={}as Employee;
  emplist:Employee[]=[];
  empid?:number;
  

  ngOnInit():void{
    this.emplist=[new Employee(338,"Parveen","Developer","parveen123@gmail.com","9876543210",40000,"IT"),
      new Employee(349,"Sathis","Developer","sathis123@gmail.com","9876543210",50000,"IT"),
      new Employee(347,"Saranya","Tester","saranya123@gmail.com","9876543210",45000,"Testing")
    ]
    this.empid = Number(this.route.snapshot.paramMap.get('eid')); 
    const found = this.emplist.find((e) => e.eid === this.empid) || null; 
    this.employee.set(found);
    if(found){
    this.empform.patchValue({
      eid:found.eid,
      ename:found.ename,
      desg:found.desg,
      email:found.email,
      mobile:found.mobile,
      salary:found.salary,
      dept:found.dept


    })
  }
}

 update(){
  if(this.empform.invalid) return;
  const updateemp=this.empform.getRawValue();
  this.service.update(this.empid as number,updateemp).subscribe(()=>{
    console.log("Employee Updated")
  })
  //console.log(updateemp)
  this.router.navigate(['/emp/list'])
  
 } 

}
