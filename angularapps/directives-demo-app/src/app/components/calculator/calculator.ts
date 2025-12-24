import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  num1!: number;
  num2!: number;
  res!: number;
  op=''

  calc(op: string) {
    this.op=op;
    switch (this.op) {
      case 'ADD':
        this.res = this.num1 + this.num2;
        break;
      case 'SUB':
        this.res = this.num1 - this.num2;
        break;
      case 'MUL':
        this.res = this.num1 * this.num2;
        break;
      case 'DIV':
        this.res = this.num1 / this.num2;
        break;
      default:
        this.res=0;
    }
  }
}
