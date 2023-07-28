import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnChanges, OnInit {
  @Input() childInput = '';
  @Output() sendToParent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.sendToParent.emit('I came from child to parent');

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.childInput);
    
  }

  
}
