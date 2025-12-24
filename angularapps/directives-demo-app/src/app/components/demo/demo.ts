import { Component } from '@angular/core';
import { OnclickBoldDirective } from "../../directives/onclick-bold-directive";
import { Directivesdemo } from "../../directives/directivesdemo";
import { TextSelectDirective } from "../../directives/text-select-directive";

@Component({
  selector: 'app-demo',
  imports: [OnclickBoldDirective, Directivesdemo, TextSelectDirective],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {

}
