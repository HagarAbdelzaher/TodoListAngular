import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { User } from 'src/models/user.model';
import { NgForm, NgModelGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogged=false;
  user:User|any;
  constructor( private _auth:AuthService,private router:Router){
  
    this._auth.loggedIn$.subscribe((res)=>{
      this.isLogged=res
  })
}
    

    submitMyForm(form:NgForm) {
    
      this.user = form.value;
      let data:any=localStorage.getItem(this.user.email.toString());
      let object:any=JSON.parse(data)


if(object!=null &&this.user.email===object.email && this.user.password===object.password){
  localStorage.setItem("currentuser",JSON.stringify(object));
  console.log('logged in')
  this._auth.change();
  this.router.navigate(['/todo']);
 
}
else{
console.log('Wrong credntials')
}
      form.reset()


    
  }

  navigate(){
    this.router.navigate(['/signup']);
  }
  
}
