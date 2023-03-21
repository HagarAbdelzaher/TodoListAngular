import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Todo } from 'src/models/todo.model';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-app-done',
  templateUrl: './app-done.component.html',
  styleUrls: ['./app-done.component.css']
})
export class AppDoneComponent implements OnInit {
  @Input() todo:Todo = {
    id:Guid.create() ,
    isComplete:false , 
    isFavorite:false , 
    isDeleted:false,
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
