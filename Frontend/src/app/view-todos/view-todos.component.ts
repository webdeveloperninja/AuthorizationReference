import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html'
})
export class ViewTodosComponent {
  constructor(private readonly httpClient: HttpClient) {}

  getTodos() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').subscribe();
  }
}
