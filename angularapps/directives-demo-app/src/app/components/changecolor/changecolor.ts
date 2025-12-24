import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-changecolor',
  imports: [NgIf,CommonModule],
  templateUrl: './changecolor.html',
  styleUrl: './changecolor.css',
})
export class Changecolor {
  checkcolor=false;
  changeBgColor(){
    this.checkcolor=!this.checkcolor;
    document.body.style.backgroundColor=this.checkcolor?"cyan":"gray";
  }
}
