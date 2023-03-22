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
    let percentage: number =  parseInt(((this._todos.getDoneCount() / this._todos.getTotalCount()) * 100).toFixed(0));
    if(isNaN(percentage)){
      return 0;
    }
    return percentage;
  }
}