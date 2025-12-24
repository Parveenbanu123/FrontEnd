import { Component } from '@angular/core';
import { NgClass, NgStyle } from "@angular/common"

@Component({
  selector: 'app-student',
  imports: [NgClass],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  stud=[
    {sid:338,sname:'Parveen',marks:80},
    {sid:349,sname:'Sathis',marks:90},
    {sid:347,sname:'Saranya',marks:70},
    {sid:340,sname:'PraveenKumar',marks:50},
    {sid:304,sname:'Arthika',marks:30},
    {sid:359,sname:'Vignesh',marks:40}
  ]
}
