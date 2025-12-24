import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Empservice } from '../../service/empservice';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-addemp',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addemp.html',
  styleUrl: './addemp.css',
})
export class Addemp {
  empform: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private service: Empservice) {
    this.empform = this.fb.group({
      eid: [0, [Validators.required, Validators.min(1)]],
      ename: ['', [Validators.required, Validators.minLength(3)]],
      desg: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      salary: [0, [Validators.required, Validators.min(1000)]],
      dept: ['', Validators.required],
    });

    
  }

  onSubmit() {
    this.submitted = true;
    if (this.empform.valid) {
      this.service.saveEmployee(this.empform.value).subscribe(
        {
          next : (data) => { 
            console.log(data);
            this.router.navigate(['/employees']);
          } , 
          error: (err) => {
            alert('Couldnt enter data');
          }
        }
      )
    }
  }
}
