import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectConstant } from '../constant/project.constant';
import { Book } from '../layouts/main/main.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient
  ) { }

  getBookList = () => {
    return this.http.get<Book[]>(ProjectConstant.apiUrl + 'Book');
  }
}
