import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Errors } from "./components/errors/errors";
import { Errorscomponent } from "./components/errorscomponent/errorscomponent";
import { Apiservice } from './services/apiservice';
import { load } from './demo';
import { A } from './services/a';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Errors, Errorscomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('errorsdemoApp');
  myname="Parveen"
  //constructor(private service:Apiservice){}
  // service=inject(Apiservice) //Without constructor injection
  // ngOnInit(){
  //   this.service.sayHello();
  // }
  res:any
  constructor(private a:A){}
  ngOnInit(){
    //load().subscribe((data)=>{console.log(data),this.res=data});
    this.a.aMethod();
  }

}
