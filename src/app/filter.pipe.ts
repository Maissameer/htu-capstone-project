import { sectors } from './landing-page/landing-page.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {
    //  if (!items) {
    //    return [];
    //  }
    //  if (!searchText) {
    //    return items;
    //  }
    // searchText = searchText.toLocaleLowerCase();

    // return items.filter(it => {
    //    return it.toLocaleLowerCase().includes(searchText);
    // });
  }

}
