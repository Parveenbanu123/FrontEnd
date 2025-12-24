import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectivesdemo]',
})
export class Directivesdemo {

  mycolor='black'
  hover=false

  constructor() { }
  @HostBinding('style.color')
  get color(){
    return this.mycolor;
  }
  @HostBinding('style.fontWeight')
  get fontWeight(){
    return this.hover?'bold':'normal';
  }

  @HostListener('mouseenter')
  OnEnter(){
    this.mycolor='purple';
    this.hover=true
  }

  @HostListener('mouseleave')
  OnLeave(){
    this.mycolor='black';
    this.hover=false
  }

  
  

}
