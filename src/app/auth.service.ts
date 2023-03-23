import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loggedIn=new BehaviorSubject(false);
loggedIn$=this.loggedIn.asObservable()
  constructor() { }

  change(){
    this.loggedIn.next(!this.loggedIn.getValue)
  }
}
