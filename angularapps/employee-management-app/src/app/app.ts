import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Addemp } from "./components/addemp/addemp";
import { Emplist } from "./components/emplist/emplist";
import { Empinfo } from "./components/empinfo/empinfo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Addemp, Emplist, Empinfo,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee-management-app');
}
