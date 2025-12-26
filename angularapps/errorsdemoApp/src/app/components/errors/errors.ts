import { Component } from '@angular/core';

type User={
  uname:string,
    age:number,
    id:number
}


@Component({
  selector: 'app-errors',
  imports: [],
  templateUrl: './errors.html',
  styleUrl: './errors.css',
})

export class Errors {
//   user={
//     uname:"Parveen",
//     age:22,
//     id:338
//  }
//  display(){
//   console.log(this.user.uname+" "+this.user.age+" "+this.user.id);
//  }
//  ngOnInit(){
//   console.log(this.user);
//  }
  //u:User={uname:"Parveen",age:22,id:338}
  ngOnInit(){
      // console.log(this.u);
      // console.log(this.u.age)
      const pValue=document.querySelector("#id1");
      if(pValue!=null)
        pValue.textContent="Hello Error";
      //console.log(pValue?.textContent)
  }
}
