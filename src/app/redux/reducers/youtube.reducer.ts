import { createReducer, on } from '@ngrx/store';
import { ICard } from '../../youtube/models/card.model';
import { 
  clearAppState,
  loadSearchedVideos, 
  loadSearchedVideosFailure, 
  loadSearchedVideosSuccess, 
} from '../actions/youtube.actions';

export interface YoutubeCardsState {
  error: string;
  isLoading: boolean;
  cards: ICard[];  
}

const initialState: YoutubeCardsState = {
  error: '',
  isLoading: false,
  cards: [],
};

export const youtubeCardsReducer = createReducer(
  initialState,
  on(
    loadSearchedVideos,
    (state): YoutubeCardsState => ({ ...state, isLoading: true }),
  ),
  on(
    loadSearchedVideosSuccess,
    (state, { cards }): YoutubeCardsState => ({ ...state, cards, isLoading: false, error: '' }),
  ),
  on(
    loadSearchedVideosFailure,
    (state, { error }): YoutubeCardsState => ({ ...state, cards: [], error, isLoading: false }),
  ),
  on(
    clearAppState,
    () => ({ ...initialState }),
  ),
);