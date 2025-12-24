import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass, NgStyle } from "@angular/common";

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  uname:string='';
  pwd:string='';
 status='';
  msg=''
  login(){
    if(this.uname==='admin'&&this.pwd==='admin123'){
      this.msg='Login Successfull';
      this.status='success';
    }
    else{
      this.msg='Login Failed,Invalid Credentials';
      this.status='failed';
    }
  }
}
