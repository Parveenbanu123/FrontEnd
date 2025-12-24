import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-empupdate',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './empupdate.html',
  styleUrl: './empupdate.css',
})
export class EmpUpdate {
  empform: FormGroup;
  submitted = false;

  employees: Employee[] = [
    new Employee(1, 'John Doe', 'Manager', 'john@example.com', 50000, 1234567890, 'HR'),
    new Employee(2, 'Jane Smith', 'Developer', 'jane@example.com', 40000, 9876543210, 'IT'),
    new Employee(3, 'Mike Johnson', 'Designer', 'mike@example.com', 35000, 1122334455, 'Design')
  ];

  constructor(private route: ActivatedRoute, private fb: FormBuilder,private router: Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.employees.find(e => e.eid === id);

    this.empform = this.fb.group({
      eid: [{ value: found?.eid || 0, disabled: true }],
      ename: [found?.ename || '', [Validators.required, Validators.minLength(3)]],
      desg: [found?.desg || '', Validators.required],
      email: [found?.email || '', [Validators.required, Validators.email]],
      mobile: [found?.mobile || '', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      salary: [found?.salary || 0, [Validators.required, Validators.min(1000)]],
      dept: [found?.dept || '', Validators.required]
    });
  }

  onSubmit() {
    if(this.empform.invalid) return;
    this.submitted = true;
    if (this.empform.valid) {
      console.log('Updated Employee:', this.empform.getRawValue());
    }
    this.router.navigate(['/employees']);
  }
}
