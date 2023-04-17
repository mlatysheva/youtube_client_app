import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../models/card.model';

@Pipe({
  name: 'sortByViews',
})
export class SortByViewsPipe implements PipeTransform {

  transform(searchResults: ICard[], order: string): ICard[] {
    if (order === 'asc') {
      return searchResults.sort((a, b) => {
        return Number(a.statistics.viewCount) - Number(b.statistics.viewCount);

      });
    } else if (order === 'desc') {
      return searchResults.sort((a, b) => {
        return Number(b.statistics.viewCount) - Number(a.statistics.viewCount);      
      });
    } else {
      return searchResults;
    }
  }

}
