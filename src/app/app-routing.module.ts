import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], children: [
      { path: 'todo', component: TodoComponentComponent },
      { path: 'done', component: TodoComponentComponent },
      { path: 'favorites', component: TodoComponentComponent },
      { path: 'deleted', component: TodoComponentComponent },
      { path: 'aboutus', component: AboutUsComponent },
    ]
  },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
