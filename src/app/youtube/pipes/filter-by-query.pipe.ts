import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../models/card.model';

@Pipe({
  name: 'filterByQuery',
})
export class FilterByQueryPipe implements PipeTransform {

  transform(searchResults: ICard[], word: string): ICard[] {
    if (word.length === 0) return searchResults;
    return searchResults.filter(item => item.snippet.title.toLowerCase().includes(word.toLowerCase()));
    // item.snippet.description.toLowerCase().includes(word.toLowerCase()) || 
    // item.snippet.tags.includes(word.toLowerCase()));
  }
}
