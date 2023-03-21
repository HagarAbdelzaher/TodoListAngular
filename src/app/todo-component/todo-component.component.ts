import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Todo } from 'src/models/todo.model';
import { TodosServiceService } from '../todos-service.service';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css',]
})
export class TodoComponentComponent {
  todos: Todo[];
  done:Todo[];
  favorite:Todo[];
  deleted:Todo[];
  currentUrl:string;

  constructor(private _todos:TodosServiceService , private _activatedRoute:ActivatedRoute){
    this.todos = _todos.todos;
    this.done = _todos.done;
    this.favorite = _todos.favorite;
    this.deleted = _todos.deleted;
    this.currentUrl=this._activatedRoute.snapshot.url.toString();
    console.log(this.currentUrl);
  }
   onSubmit(form:NgForm){
   this._todos.onSubmit(form.value);
   form.resetForm();
  }
  
}


