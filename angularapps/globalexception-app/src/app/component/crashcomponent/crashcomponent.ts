import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ErrorService } from '../../services/error-service';

@Component({
  selector: 'app-crashcomponent',
  imports: [RouterLink],
  templateUrl: './crashcomponent.html',
  styleUrl: './crashcomponent.css',
})
export class Crashcomponent {
  constructor(public service:ErrorService){
    throw new Error("crash inside route");
  }
  ngOnInit(){
    throw new Error("crash inside route");
  }
}
