import { createReducer, on } from '@ngrx/store';
import { ICard } from '../../youtube/models/card.model';
import { clearAdminState, createAdminCardAction } from '../actions/admin.actions';

export interface AdminCardsState {
  cards: ICard[];  
}

const initialState: AdminCardsState = {
  cards: [],
};

export const adminCardsReducer = createReducer(
  initialState,
  on(
    createAdminCardAction,
    (state, payload): AdminCardsState => ({
      ...state,
      cards: [...state.cards, payload],
    }),
  ),
  on(
    clearAdminState,
    () => ({ ...initialState }),
  ),
);


