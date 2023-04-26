import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../models/card.model';
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';

@Pipe({
  name: 'sortByDuration',
})
export class SortByDurationPipe implements PipeTransform {  
  transform(searchResults: ICard[], order: string): ICard[] {
    if (order === 'asc') {
      return searchResults.sort((a, b) => {
        return moment.duration(a?.contentDetails?.duration).asSeconds() - moment.duration(b?.contentDetails?.duration).asSeconds();
      });
    } else if (order === 'desc') {
      return searchResults.sort((a, b) => {
        return moment.duration(b?.contentDetails?.duration).asSeconds() - moment.duration(a?.contentDetails?.duration).asSeconds();
      });
    } else {
      return searchResults;
    }
  }
}