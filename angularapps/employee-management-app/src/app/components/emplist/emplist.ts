import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { Router, RouterLink } from "@angular/router";
import { Empservice } from '../../services/empservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emplist',
  imports: [RouterLink,CommonModule],
  templateUrl: './emplist.html',
  styleUrl: './emplist.css',
})
export class Emplist {
  emplist:Employee[]=[];
  constructor(private router:Router,private service:Empservice){}
  
  ngOnInit():void{
    this.service.findAll().subscribe(data=>this.emplist=data);
  }
  
  delete(eid:number){
    alert("Do you want to delete Yes/No");
    console.log("Deleted");
    this.router.navigate(["/emp/list"])
  }
}
