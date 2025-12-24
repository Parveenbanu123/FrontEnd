import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  @Input() appName="";             
  uname:string="";
  pwd:string="";
  @Output() notify=new EventEmitter<string>()
  login=()=>{
    event?.preventDefault()
    this.notify.emit('Login Form submitted')
    if(this.uname==="Parveen" && this.pwd==="12345")
      alert("Login Successfull")
    else
      alert('Invalid Credentials')
    // console.log(this.uname)
    // console.log(this.pwd)
    // alert("Login button created")

    
  }
}

