import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe((param: any) => {
      alert('Your param is ' + param.id);
    });
    this.activatedRoute.queryParams.subscribe((queryParam: any) => {
      console.log(queryParam);
    })
  }
}
