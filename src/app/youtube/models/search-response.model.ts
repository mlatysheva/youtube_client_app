import { ICard } from './card.model';

export interface IResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ICard[];
}