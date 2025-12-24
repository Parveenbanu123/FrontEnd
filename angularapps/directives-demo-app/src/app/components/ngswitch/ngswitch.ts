import { Component } from '@angular/core';
import { CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";

@Component({
  selector: 'app-ngswitch',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault,CommonModule],
  templateUrl: './ngswitch.html',
  styleUrl: './ngswitch.css',
})
export class Ngswitch {
 choice="home";
 setChoice(choice:string){
  this.choice=choice;
 }
}
