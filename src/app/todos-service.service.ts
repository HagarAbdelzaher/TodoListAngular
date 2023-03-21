import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Todo } from 'src/models/todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {
todos:Todo[]=[];
done:Todo[]=[];
deleted:Todo[]=[];
favorite:Todo[]=[];
  constructor() { }
  onSubmit(_todo:Todo){
    let todo = new Todo(Guid.create() , _todo.title , _todo.isComplete , _todo.isFavorite , _todo.isDeleted);
    this.todos.push(todo);
  }

  onComplete(id:Guid){
    let todo = this.todos.filter(t=>t.id===id)[0];
    todo.isComplete=true;
    this.done.push(todo);
  }
  onDelete(id:Guid){
    let todo = this.todos.filter(t=>t.id===id)[0];
    todo.isDeleted=true;
    this.deleted.push(todo);
  }
  onFavorite(id:Guid){
    let todo = this.todos.filter(t=>t.id===id)[0];
    todo.isFavorite=true;
    this.favorite.push(todo);

  }

}
