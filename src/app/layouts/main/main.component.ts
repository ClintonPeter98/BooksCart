import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Book } from './main.model';
import { ProjectConstant } from 'src/app/constant/project.constant';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  bookList: Book[] = [];
  readonly imgBasePath = ProjectConstant.contentUrl;
  constructor(
    private main: MainService
  ) {
    this.getBookList();
  }

  getBookList() {
    this.main.getBookList().subscribe(res => {
      if(res.length > 0) {
        this.bookList = res;
            }
    })
  }
}
