import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentDate'
})
export class MomentDatePipe implements PipeTransform {

  transform(value: string, args: string): unknown {
    // const arr = [1, 2, 4 ,9, 4]
    
    console.log(new Date(value), args, moment());
    return moment(value).format(args);
  }

}
