import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {
  name:string="Parveen banu"
  names:string[]=["Parveen","Banu","Sathis","Saranya"]
  obj={
    name:"Parveen",
    id:338
  }
}
