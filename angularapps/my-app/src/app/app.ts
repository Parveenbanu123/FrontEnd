import { Component,  signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from './components/hello/hello';
import { Demo } from "./components/demo/demo";
import { Login } from "./components/login/login";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello, Demo, Login, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
  appName="Login Application"
  msg:string=""
  receive(msg:string){
    this.msg=msg
    console.log(msg)
  }
}
