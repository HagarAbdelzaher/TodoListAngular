import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) {

   }

   getUserByEmail(email:string){
     let users = this.http.get("https://dummyjson.com/users" , {
      responseType:"json"
     });
     console.log(typeof(users));
   } 
       


}
