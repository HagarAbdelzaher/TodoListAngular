import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Todo } from 'src/models/todo.model';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-app-deleted',
  templateUrl: './app-deleted.component.html',
  styleUrls: ['./app-deleted.component.css']
})
export class AppDeletedComponent implements OnInit {
  @Input() todo:Todo = {
    id:Guid.create() ,
    isComplete:false , 
    isFavorite:false , 
    isDeleted:false,
    userId:Guid.create(),
    title:"" 
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