import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule, NgIf],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css',
})
export class NgIf {

  isLoggedIn = false
  uname = "Parveen Banu"

  login() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  isActive = true;
  toggle() { 
    this.isActive = !this.isActive; 
  }

}
