import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lc',
  imports: [],
  templateUrl: './lc.html',
  styleUrl: './lc.css',
})
export class Lc implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  name:string='Parveen'
  //@ViewChild('title')  title!:ElementRef
  private timer:any
  constructor(){
    console.log("1.Constructor Called")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("2.ngOnChanges",changes)
  }
  ngOnInit(): void {
    console.log("3.ngOnInit")
    this.timer=setInterval(()=>{
      console.log("Timer started")
    },3000)
  }
  ngDoCheck(): void {
    console.log("4.ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("5.ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("6.ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("7.ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("8.ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("9.ngOnDestroy")
    console.log(this.timer)
  }

  changeName(){
    this.name="Parveen banu"
  }

}
