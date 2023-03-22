import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Todo } from 'src/models/todo.model';
import {TodosServiceService} from 'src/app/todos-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-app-todo',
  templateUrl: './app-todo.component.html',
  styleUrls: ['./app-todo.component.css']
})
export class AppTodoComponent implements OnInit {
  @Input() todo:Todo = {
    id:Guid.create() ,
    isComplete:false , 
    isFavorite:false , 
    isDeleted:false,
    title:"",
    userId:Guid.create() 
  };
  constructor(private _todos:TodosServiceService){
  }
  addTodo(form:NgForm){
   this._todos.onSubmit(form.value);
  }

  completeTodo(){
    this._todos.onComplete(this.todo.id)
  }

  deleteTodo(){
    this._todos.onDelete(this.todo.id);
  }
  favoriteTodo(){
    this._todos.onFavorite(this.todo.id);
  }
 
 
 ngOnInit(): void {
 }

}
