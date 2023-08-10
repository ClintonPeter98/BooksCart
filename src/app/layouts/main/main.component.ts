import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Book } from './main.model';
import { ProjectConstant } from 'src/app/constant/project.constant';
import { AppService } from 'src/app/services/app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  $bookList: Observable<Book[]> | undefined;
  cartCount = 0;
  readonly imgBasePath = ProjectConstant.contentUrl;
  constructor(
    private main: MainService,
    private appService: AppService,
  ) {
    this.getBookList();
  }

  getBookList() {
   this.$bookList = this.main.getBookList()
    // .subscribe(res => {
    //   if(res.length > 0) {
    //     this.bookList = res;
    //         }
    // })
  }

  addToCart(isAdd: boolean){
    isAdd ? this.cartCount += 1 : this.cartCount -= 1; // this.cartCount = this.cartCount + 1;
    this.appService.setCartValue(this.cartCount);
  }
}
