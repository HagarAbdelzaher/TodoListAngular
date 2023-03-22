import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Todo } from 'src/models/todo.model';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-app-favorite',
  templateUrl: './app-favorite.component.html',
  styleUrls: ['./app-favorite.component.css']
})
export class AppFavoriteComponent implements OnInit {
  @Input() todo:Todo = {
    id:Guid.create() ,
    isComplete:false , 
    isFavorite:false , 
    isDeleted:false,
    title:"" ,
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
