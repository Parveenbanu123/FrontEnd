import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lc } from "./components/lc/lc";
import { Viewchild } from "./components/viewchild/viewchild";
import { Child } from "./components/child/child";
import { Parent } from "./components/parent/parent";
import { Parentcontent } from "./components/parentcontent/parentcontent";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Lc, Viewchild, Child, Parent, Parentcontent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lifecycle');
} 
    