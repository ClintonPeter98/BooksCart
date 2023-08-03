import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private readonly appService: AppService, private http: HttpClient) {
    this.setTodo().subscribe();
   }

   getUserDetails = () => this.appService.getUserData();

   getTodos = () => {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
   }

   setTodo() {
    return this.http.post('https://jsonplaceholder.typicode.com/posts',
    {
      id: 1,
      title: 'Demo todo',
      body: 'I am demo todo',
      userId: 1
    })
   }

}
