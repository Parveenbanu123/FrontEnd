import { AfterViewInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-childcontent',
  imports: [],
  templateUrl: './childcontent.html',
  styleUrl: './childcontent.css',
})
export class Childcontent implements AfterViewInit{
  @ContentChild('contentRef') contentRef!:ElementRef
  ngAfterViewInit(): void {
    console.log("Child received content from Parent ",this.contentRef.nativeElement.textContent)
  }
  changeContent(){
    this.contentRef.nativeElement.textContent="Child modified content"
  }

}
