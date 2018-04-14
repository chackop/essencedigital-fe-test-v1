import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listSearch'
})
export class ListSearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    // console.log(searchText);
    // console.log(items);
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter((item) => {
      // console.log(item);
      return item.name.toLowerCase().includes(searchText);
    });
  }
}
