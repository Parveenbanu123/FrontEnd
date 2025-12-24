import { Component } from '@angular/core';
import { ReversePipe } from '../../pipes/reverse-pipe';
import { CommonModule } from '@angular/common';
import { ResultPipe } from '../../pipes/result-pipe';
import { LengthPipe } from '../../pipes/length-pipe';
import { MaskmobilenumPipe } from '../../pipes/maskmobilenum-pipe';
import { EvenPipe } from '../../pipes/even-pipe';
import { EvenimpurePipe } from '../../pipes/evenimpure-pipe';

@Component({
  selector: 'app-customepipes',
  imports: [ReversePipe,CommonModule,ResultPipe,LengthPipe,MaskmobilenumPipe,EvenPipe,EvenimpurePipe],
  templateUrl: './customepipes.html',
  styleUrl: './customepipes.css',
})
export class Customepipes {
  myname="parveen"
  stud={name:"Sathis",id:338,marks:85}
  //r='Passed'
  //r=this.stud.marks>35//?'pass':'fail'
  r!:string

  getResult(){
    this.r=this.stud.marks>35?'Passed':'Failed'
    
  }
  mobileNum='9876543210';
  nums=[1,2,3,4,5,6,7,8,9,10]

  pushNumber(){
    this.nums.push(11);
    this.nums.push(12);
    this.nums.push(13);
    this.nums.push(14);
    this.nums.push(15);
    this.nums.push(16);
  }

  addNumbersImmutable(){
    this.nums=[...this.nums,11,12,13,14,15,16]
  }

}
