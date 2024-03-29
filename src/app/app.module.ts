import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { AppTodoComponent } from './app-todo/app-todo.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppDoneComponent } from './app-done/app-done.component';
import { AppFavoriteComponent } from './app-favorite/app-favorite.component';
import { AppDeletedComponent } from './app-deleted/app-deleted.component';
import { SignUpComponent } from './sign-up/sign-up.component'
import { LoginComponent } from './login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponentComponent,
    AppTodoComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    AppDoneComponent,
    AppFavoriteComponent,
    AppDeletedComponent,
    SignUpComponent,
    LoginComponent,
    AboutUsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass: MyInterceptorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
