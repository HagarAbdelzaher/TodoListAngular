import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loggedIn=new BehaviorSubject(true);
loggedIn$=this.loggedIn.asObservable()
  constructor(private http:HttpClient) {  }

  change(){
   this.loggedIn.next(!this.loggedIn.getValue())
  }



   getUserByEmail(email:string){
     let users = this.http.get("https://dummyjson.com/users" , {
      responseType:"json"
     });
     console.log(typeof(users));
   } 
       


}
