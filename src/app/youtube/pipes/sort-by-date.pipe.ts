import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../models/card.model';
import { ORDER } from '../../shared/constants';

@Pipe({
  name: 'sortByDate',
})
export class SortByDatePipe implements PipeTransform {

  transform(searchResults: ICard[], order: string): ICard[] {
    if (order === ORDER.asc) {
      return searchResults.sort((a, b) => {
        return new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime();
      });
    } else if (order === ORDER.desc) {
      return searchResults.sort((a, b) => {
        return new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime();
      });
    } else {
      return searchResults;
    }
  }
}
