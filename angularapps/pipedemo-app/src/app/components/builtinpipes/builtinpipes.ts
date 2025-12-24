import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-builtinpipes',
  imports: [CommonModule],
  templateUrl: './builtinpipes.html',
  styleUrl: './builtinpipes.css',
})
export class Builtinpipes {
  myname:string="Parveen banu"
  course:string="JAVA"
  today=new Date
  cost=349.38
  discount=0.65

  emp={
    name:"Sathis",id:349,desg:"Developer"
  }

  names=['Parveen','Sathis','Saranya','Banu','Ashik','Wahith']

  gender='Female'
  genderMap={'Male':'Mr.','Female':'Ms.'}

  count=49
  msgMap={'=0':'No Messages','=1':"One Message",other:"# Messages"}

}
