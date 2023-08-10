import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, map, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private cartValue = new BehaviorSubject<number>(0);

  constructor() {
    // this.testObservablesAndPromise();
    this.testOtherRXJSFeatures();
    // this.testArrayProperties();
  }

  getUserData = () => {
    return {
      name: 'Guru',
      designation: 'Web developer',
      place: 'Vizag'
    }
  }

  setCartValue = (num: number) => {
    this.cartValue.next(num);
  }

  getCartValue = () => this.cartValue;

  async testObservablesAndPromise() {
    // Observables
    const arr = [4, 2, 6, 8, 6];
    const obs1 = of(arr);
    const obs2 = from(arr);
    const obs3 = new Observable(obs => {
      obs.next(arr)
    });
    obs1.subscribe(res => {
      // console.log(res)
    })
    obs2.subscribe(res => {
      // console.log(res)
    })
    obs3.subscribe(res => {
      // console.log(res)
    })

    // Promise
    // console.log("Promise starts");

    const prom1 = new Promise((resolve, reject) => {
      resolve(arr);
    })
    await prom1.then(res => {
      // console.log(res);
    }).finally(() => {
      // console.log('finnally');
    })


    // Observables to Promise
    // console.log("Observables to Promise starts");
    obs1.toPromise().then(res => {
      // console.log(res, 'Observables to Promise');
    })
  }

  testArrayProperties() {

    const data = 'I am data';
    let data1 = data;
    data1 = 'I am changed data';
    // console.log(data, ',' , data1);
    // foreach, filter, find, findIndex, map, slice, splice
    const arr1 = [1, 2, 3, 4, 5, 6];
    let arr2 = arr1;
    arr2.push(7);
    // console.log(arr1, arr2);
    const products = [
      { id: 1, name: 'Book', cost: 100 },
      { id: 2, name: 'Note book', cost: 50 },
      { id: 3, name: 'Pen', cost: 20 },
      { id: 4, name: 'Laptop', cost: 50000 },
      { id: 5, name: 'Bottle', cost: 100 },
      { id: 6, name: 'Mobile', cost: 10000 },
      { id: 7, name: 'Keyboard', cost: 1000 },
      { id: 8, name: 'Mouse', cost: 1000 },
      { id: 9, name: 'Specs', cost: 500 },
      { id: 10, name: 'Sanitizer', cost: 80 },
    ];
    console.log("forEach --------------------");
    products.forEach(item => {
      if (item.cost >= 10000) {
        console.log(item);
      }
    });

    console.log("filter --------------------");
    const filteredProducts = products.filter(p => p.cost >= 5000);
    console.log(filteredProducts);
    console.log("find --------------------");
    const foundProduct = products.find(p => p.id === 5);
    console.log(foundProduct);
    console.log("find --------------------");
    const foundProductIndex = products.findIndex(p => p.id === 5);
    console.log(foundProductIndex);
    console.log("map --------------------");
    // const mappedProducts = products.map(item => {
    //   if (item.id !== 5) {
    //     item.name = item.name.toUpperCase();
    //     item.cost += 1000;
    //   }
    //   return item;
    // });
    // console.log(mappedProducts);
    console.log("slice --------------------");
    const slicedArray = products.slice(1, 5);
    console.log(slicedArray, products)
    console.log("splice --------------------");
    const splicedArray = products.splice(1, 5);
    console.log(splicedArray, products)
  }
  testOtherRXJSFeatures() {
    //Pipes
    const arr = [4, 2, 6, 8, 6];
    const obs1 = from(arr);
    obs1.pipe(map(item => {
      return item + 4;
    })).subscribe(res => {
      // console.log(res, 'Map item')
    });

    // const interval = setInterval(() => {
    //   console.log(Date.now())
    // }, 1000);

    // clearInterval(interval); // ngOnDestroy

    //Timer
    const timerSubscription = timer(5000, 1000).subscribe(res => {
      console.log(Date.now());
    })

    // timerSubscription.unsubscribe(); // ngOnDestroy
  }
  
}
