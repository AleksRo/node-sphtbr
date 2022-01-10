import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], term: string): any[] {

    if (!data) {
      return [];
    }
    if (!term) {
      return data;
    }
    term = term.toLocaleLowerCase();

    return data.filter(it => {
      return it.toLocaleLowerCase().includes(term);
    });
  }
}

