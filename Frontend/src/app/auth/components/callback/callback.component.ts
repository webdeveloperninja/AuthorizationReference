import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html'
})
export class CallbackComponent implements OnInit {
  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').subscribe();
  }
}
