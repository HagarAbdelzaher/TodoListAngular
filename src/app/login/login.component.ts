import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { User } from 'src/models/user.model';
import { NgForm, NgModelGroup } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogged=false;
  user:User|any;
  constructor( private _auth:AuthService){
  
    this._auth.loggedIn$.subscribe((res)=>{
      this.isLogged=res
  })
}
    
  
    //submit() {
   //   this.user = this.signUpForm.value;
    //  this.user.id=Guid.create();
   //   localStorage.setItem(this.user.email.toString(),JSON.stringify(this.user));
    //  this.signUpForm.reset();
  //  }
    submitMyForm(form:NgForm) {
    
      this.user = form.value;
      let data:any=localStorage.getItem(this.user.email.toString());
      let object:any=JSON.parse(data)


if(object!=null &&this.user.email===object.email && this.user.password===object.password){
  localStorage.setItem("currentuser",JSON.stringify(this.user));
  console.log('logged in')
  this._auth.change();
}
else{
console.log('Wrong credntials')
}
      form.reset()}
    }
