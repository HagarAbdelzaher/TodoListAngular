import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
signUpForm: FormGroup;
user:User|any;
constructor(private router:Router){
  this.signUpForm= new FormGroup({
    username:new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.email , Validators.required]),
    password: new FormControl(null,[Validators.minLength(6) , Validators.required]),
    quote:new FormControl(null,[Validators.required])
  });
  
}
  ngOnInit(): void {
    
  }

  submit() {
    this.user = this.signUpForm.value;
    this.user.id=Guid.create();
    localStorage.setItem(this.user.email.toString(),JSON.stringify(this.user));
    this.signUpForm.reset();
    this.router.navigate(['/login']);
  }
  navigate(){
    this.router.navigate(['/login']);
  }
}
