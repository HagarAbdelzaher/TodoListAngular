import { Component } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  username:string;
  constructor(private _todos: TodosServiceService) {
    let user :any = localStorage.getItem("currentuser");
    let object:any=JSON.parse(user)
    this.username = object.username;
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
}
