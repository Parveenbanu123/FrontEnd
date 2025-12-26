import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorService } from './services/error-service';
import { Crashcomponent } from "./component/crashcomponent/crashcomponent";
import { Homecomponent } from "./component/homecomponent/homecomponent";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Crashcomponent, Homecomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('globalexception-app');

  constructor(public service:ErrorService){}
  
  crash(){
    //throw new Error('Button Crashed')
    throw null
  }
  clear(){
    this.service.clear()
  }
  readData(){
    const user:any=undefined
    //console.log(user.name)
    const obj:any={}
    obj.doSomething();
  }

}
