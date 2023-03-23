import { Component } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private _todos: TodosServiceService) { }

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
