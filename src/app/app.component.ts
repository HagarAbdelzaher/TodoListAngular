import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-todo-app';
  constructor(private _hhtp: HttpService){}
  ngOnInit(): void {
    this._hhtp.getAllUsers().subscribe((res) => {
      console.log(res);
    })
  }
  
}
