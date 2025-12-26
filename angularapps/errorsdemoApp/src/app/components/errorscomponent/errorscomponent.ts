import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
// const name:string="Parveen";
// type User={
//   uname:string,
//     age:number,
//     id:number
// }
// const u:User={uname:"PARVEEN",age:22,id:123}
@Component({
  selector: 'app-errorscomponent',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './errorscomponent.html',
  styleUrl: './errorscomponent.css',
  
})
export class Errorscomponent {
  
  // date!:Date;
  // //x=56;
  // ngOnInit(){
  //   console.log(this.add(120,43)); 
  //   this.date=new Date(2003,9,25.7);
  //   console.log(this.date);
  //   u.uname="Parveen banu"
  //   // name="Banu"
  // }
  // add(a:number,b:number):number{
  //   let x=56;
  //   //let x=78;
  //   return a+b;
  // }
  // add(a:any,b:any){
  //   return a+b;
  // }



  uname:string="";
  price=67.88;
  nums=[1,2,3,4,5]
  mapValue=this.nums.map(n=>n*2);

  constructor(private http:HttpClient){}
  load():void{
    this.http.get("https://jsonplaceholder.typicode.com/users")
    .subscribe((data)=>console.log(data));

  }
  @Input() myname!:string;



}
