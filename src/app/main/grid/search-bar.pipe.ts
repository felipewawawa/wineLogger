import { Pipe, PipeTransform } from '@angular/core';
import { Wine } from '../../model/wine'

@Pipe({
  name: 'searchBar'
})
export class SearchBarPipe implements PipeTransform {

  transform(value: any, query: string, field: string): any {
      return query ? value.reduce((prev, next) => {
        if (next[field].includes(query)) { prev.push(next); }
        return prev;
      }, []) : value;
    }

}
