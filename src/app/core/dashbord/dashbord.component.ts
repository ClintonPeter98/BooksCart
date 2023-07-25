import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit, OnChanges, OnDestroy {
  title = 'I am dashboard';
  name = 'Guru'; //I am commented
  imageSrc = 'https://picsum.photos/200/300';
  initialValue = 'I am initial value';

  constructor() {
    console.log(1);
  }
   ngOnChanges(): void {
    console.log(2);
  }
  ngOnInit(): void {
    console.log(3);
  }
 
  ngOnDestroy(): void {
    alert(4);
  }

  onSubmit = (value: string) => {
    alert(value);
  }

  onInputChange = () => {
    console.log(this.initialValue);
  }

}