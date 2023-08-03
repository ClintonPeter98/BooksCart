import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { DashboardService } from 'src/app/services/dashboard.service';

interface Product {
  name: string,
  quantity: string,
  cost: number
}

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
  dataFromChild = '';
  sendThisDataToChild = 'I am going to be appeared in child component from parent';
  showIAmVisible = false;
  switchCaseVariable = 105;
  redBackground = true;

  productList: Product[] = [
    {name: 'Vegetable', quantity: '5kg', cost: 5000},
    {name: 'Grocery', quantity: '10kg', cost: 7000},
    {name: 'Notebooks', quantity: '15Pcs', cost: 1000},
    {name: 'Pen', quantity: '15Pcs', cost: 500},
  ] 

  constructor(private readonly appService: AppService, private dashboardService: DashboardService) {
    this.dashboardService.getTodos().subscribe(res => {
      console.log(res);
    })
    // console.log(this.dashboardService.getUserDetails());
    this.appService.setCartValue(1000);

    // for (let i = 0; i< this.productList.length ; i++) {
    //   console.log(this.productList[i]);
    // }

    this.productList.forEach(item => {
      console.log(item);
    });

    setTimeout(() => {
      this.sendThisDataToChild = 'I am going to be appeared in child component from parent. I am changed after 4 seconds.'
    }, 4000);

    if(new Date().getHours() === 10) {
      this.showIAmVisible = true;
    } else {
      this.showIAmVisible =false;
    }
  }
   ngOnChanges(): void {
    // console.log(2);
  }
  ngOnInit(): void {
    // console.log(3);
  }
 
  ngOnDestroy(): void {
    // alert(4);
  }

  onSubmit = (value: string) => {
    alert(value);
  }

  onInputChange = () => {
    console.log(this.initialValue);
  }

  onChildDataSend = (event: string) => {
    this.dataFromChild = event;
  }

}
