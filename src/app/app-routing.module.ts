import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path: 'todo', component: TodoComponentComponent},
  {path: 'done', component: TodoComponentComponent},
  {path: 'favorites', component: TodoComponentComponent},
  {path: 'deleted', component: TodoComponentComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: '**',  component:  NotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }