import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnclickBoldDirective]',
})
export class OnclickBoldDirective {

  private isBold=false;
  constructor() { }
  @HostBinding('style.fontWeight')
  get fontWeight(){
    return this.isBold?'bold':'normal';
  }

  @HostListener('click')
  toggleBold(){
    this.isBold=!this.isBold;
  }
}
