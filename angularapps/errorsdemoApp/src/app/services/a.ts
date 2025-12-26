import { inject, Injectable } from '@angular/core';
import { B } from './b';


@Injectable({
  providedIn: 'root',
})
export class A {
  injectB=inject(B)
  constructor(private b:B){}
  aMethod(){
    console.log("A Method")
  }
  ngOnInit(){
    this.injectB.bMethod();
  }
}
