import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { YoutubeService } from '../../youtube/services/youtube.service';
import { loadSearchedVideos, loadSearchedVideosFailure, loadSearchedVideosSuccess } from '../actions/youtube.actions';
import { ICard } from '../../youtube/models/card.model';

@Injectable()
export class YoutubeEffects {

  constructor(
    private actions$: Actions,
    private youtubeService: YoutubeService,    
  ) {}
  
  loadYoutubeVideos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSearchedVideos),
      switchMap(({ query }) =>
        this.youtubeService.getSearchedResults(query).pipe(
          map((cards: ICard[]) => loadSearchedVideosSuccess({ cards })),
          catchError(() =>
            of(
              loadSearchedVideosFailure({
                error: 'Failed to load videos from Youtube ',
              }),
            ),
          ),
        ),
      ),
    );
  });

}