import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'BooksCart';
  titles: string[] = ['books', 'notes', 'pens'];
  otherTitles = new Array<string>();
  phoneNumber: number = 1;
  isAvailable: boolean = true;
  bookData: Object = {
    name: 'Harry potter',
    pageLength: 1200,
    isAvailableInTheStore: true
  }


  constructor(){
    this.otherTitles.push('books');
    this.otherTitles.push('notes');
    // console.log(this.titles, this.otherTitles, this.getProducts(), this.bookData);
  }

  getProducts() {
     return 'I am string';
  }
  
}
