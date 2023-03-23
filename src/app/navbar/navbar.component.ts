import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
isLogged=true;
  constructor(private _todos: TodosServiceService , private _auth:AuthService) {
    this._auth.loggedIn$.subscribe((res)=>{
      this.isLogged=res

    })
   }

  getTodosCount() {
    return this._todos.getTodoCount();
  }
  getFavCount() {
    return this._todos.getFavCount();
  }
  getDelCount() {
    return this._todos.getDelCount();
  }
  getDoneCount() {
    return this._todos.getDoneCount();
  }
  logout(){
    this._auth.change();
    localStorage.removeItem("currentuser");
  }
  
}
