import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextSelectDirective]',
})
export class TextSelectDirective {



  constructor() { }

  @HostBinding('style.fontStyle')
  fontStyle='normal'

  @HostListener('mouseup')
  makeItalics(){
    if((window.getSelection()?.toString()||'').trim())
      this.fontStyle='italic'

  
  }






}
