import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from "./components/ng-if/ng-if";
import { Changecolor } from "./components/changecolor/changecolor";
import { Ngswitch } from "./components/ngswitch/ngswitch";
import { Calculator } from "./components/calculator/calculator";
import { NgFor } from "./components/ng-for/ng-for";
import { Student } from "./components/student/student";
import { Login } from "./components/login/login";
import { Demo } from "./components/demo/demo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, Changecolor, Ngswitch, Calculator, NgFor, Student, Login, Demo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('directives-demo-app');
}
