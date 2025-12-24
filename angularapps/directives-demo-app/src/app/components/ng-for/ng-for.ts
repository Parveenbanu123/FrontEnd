import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnclickBoldDirective } from "../../directives/onclick-bold-directive";
import { Directivesdemo } from '../../directives/directivesdemo';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule, OnclickBoldDirective,Directivesdemo],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css',
})
export class NgFor {
  items=[
    {id:1,name:'Laptop',cost:70000},
    {id:2,name:'Mobile',cost:50000},
    {id:3,name:'Watch',cost:35000},
    {id:4,name:'Mouse',cost:30000},
    {id:5,name:'Monitor',cost:40000}
  ]
}
