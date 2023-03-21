import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoComponentComponent } from './todo-component/todo-component.component';



const routes: Routes = [
  {path: 'home', component: TodoComponentComponent},
  {path: 'todo', component: TodoComponentComponent},
  {path: 'done', component: TodoComponentComponent},
  {path: 'favorite', component: TodoComponentComponent},
  {path: '**',  component:  NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }