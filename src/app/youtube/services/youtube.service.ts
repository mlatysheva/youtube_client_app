/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { ICard } from '../models/card.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, map, of, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {

  searchResults: ICard[] = [];

  query$ = new Subject<string>();
  
  constructor(
    private http: HttpClient,
    private store: Store,
  ) {}

  getAll(): Observable<ICard[]> {
    const searchRequestUrl = 'search?type=video&part=snippet&maxResults=15&q=';
    return this.http.get<ICard[]>(searchRequestUrl + this.query$);
  }

  getOne(id: string): Observable<ICard> {
    const searchRequestOneUrl = `videos?id=${id}&part=snippet,statistics,contentDetails`;
    return this.http.get(`${searchRequestOneUrl}`).pipe(
      map((res: any) => {
        const video = res.items[0];
        const seconds = moment.duration(video.contentDetails.duration).asSeconds();
        video.contentDetails.duration = moment.utc(seconds * 1000).format('HH:mm:ss');
        return video;
      }),
    );
  }

  getVideoIds(query: string): Observable<string[]> {
    const videoIds: string[] = [];
    const searchRequestUrl = `search?type=video&part=snippet&maxResults=15&q=${query}`;
    return this.http.get(searchRequestUrl).pipe(
      map((res: any) => {
        res.items.map((item: { id: { videoId: string; }; }) => {
          videoIds.push(item.id.videoId);
        });
        return videoIds;
      }),
    );
  }

  getStatistics(videoIds: string[]): Observable<ICard[]> {
    const statisticsRequestUrl = `videos?id=${videoIds.join()}&part=snippet,statistics,contentDetails`;
    return this.http.get(statisticsRequestUrl).pipe(
      map((res: any) => {
        res.items.map((item: ICard) => {
          if (item.contentDetails && item.contentDetails.duration) {
            const seconds = moment.duration(item.contentDetails.duration).asSeconds();
            item.contentDetails.duration = moment.utc(seconds * 1000).format('HH:mm:ss');
          }
        });
        this.searchResults = res.items;
        return res.items;
      }),
    );
  }

  getSearchedResults(query: string): Observable<ICard[]> {
    return this.getVideoIds(query).pipe(
      switchMap((videoIds) => this.getStatistics(videoIds)),
      map((res) => {
        return res;
      }),
      catchError((err) => {
        console.error(err);
        return of([]) as Observable<ICard[]>;
      }),
    );
  }
}
