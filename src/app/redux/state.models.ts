import { ActionReducerMap } from '@ngrx/store';
import { AdminCardsState, adminCardsReducer } from './reducers/admin.reducer';
import { YoutubeCardsState, youtubeCardsReducer } from './reducers/youtube.reducer';

export interface AppState {
  adminCards: AdminCardsState;
  youtubeCards: YoutubeCardsState;
}

export const reducers: ActionReducerMap<AppState> = {
  adminCards: adminCardsReducer,
  youtubeCards: youtubeCardsReducer,
};