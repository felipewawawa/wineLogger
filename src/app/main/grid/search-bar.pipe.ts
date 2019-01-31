import { Pipe, PipeTransform } from '@angular/core';
import { Wine } from '../../model/wine'

@Pipe({
  name: 'searchBar'
})
export class SearchBarPipe implements PipeTransform {

    transform(items: any[], filter: Wine): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.name.indexOf(filter.name) !== -1);
    }

}
