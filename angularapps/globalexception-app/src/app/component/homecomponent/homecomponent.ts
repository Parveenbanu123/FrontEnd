import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ErrorService } from '../../services/error-service';

@Component({
  selector: 'app-homecomponent',
  imports: [RouterLink],
  templateUrl: './homecomponent.html',
  styleUrl: './homecomponent.css',
})
export class Homecomponent {
 constructor(public service:ErrorService){
    //throw new Error("crash inside route");
  }
}
