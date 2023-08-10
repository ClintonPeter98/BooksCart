import { Component } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchBooksInput = '';
  cartCount = 0;
  constructor(private appService: AppService){
    this.appService.getCartValue().subscribe(cart => {
      this.cartCount = cart;
    })
  }

  onSearchBarChange(event: any){
    if(event.keyCode === 49) {
      return false;
    }
    console.log(this.searchBooksInput, event.keyCode);
    return true;
  }
}
