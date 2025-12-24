import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Builtinpipes } from "./components/builtinpipes/builtinpipes";
import { Customepipes } from "./components/customepipes/customepipes";

@Component({
  selector: 'app-root',
  imports: [Builtinpipes, Customepipes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipedemo-app');
}
