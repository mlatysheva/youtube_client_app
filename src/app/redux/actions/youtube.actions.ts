import { createAction, props } from '@ngrx/store';
import { ICard } from '../../youtube/models/card.model';

export const loadSearchedVideos = createAction(
  '[Header Input] Loaded Searched Videos',
  props<{ query: string }>(),
);

export const loadSearchedVideosSuccess = createAction(
  '[YouTube API] Loaded Searched Videos Successfully',
  props<{ cards: ICard[] }>(),
);

export const loadSearchedVideosFailure = createAction(
  '[YouTube API] Failed to Load Searched Videos',
  props<{ error: string }>(),
);

export const clearAppState = createAction('[Header Logout] Cleared App State');
  