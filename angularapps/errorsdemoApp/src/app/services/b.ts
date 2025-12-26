import { inject, Injectable } from '@angular/core';
import { A } from './a';

@Injectable({
  providedIn: 'root',
})
export class B {
  injectA=inject(A);
  bMethod(){
    console.log("B Method")
  }
  ngOnInit(){
    this.injectA.aMethod();
  }
}
