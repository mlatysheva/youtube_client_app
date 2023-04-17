import { createSelector } from '@ngrx/store';
import { AppState } from '../state.models';
import { ICard } from '../../youtube/models/card.model';
import { selectAdminCards } from './admin.selectors';

export const selectYoutubeCards = (state: AppState) => state.youtubeCards.cards;

export const selectYoutubeCardById = (id: string) => createSelector(
  selectYoutubeCards,
  (cards: ICard[]) => cards.find((card: ICard) => card.id === id),
);

export const selectAllCards = createSelector(
  selectAdminCards,
  selectYoutubeCards,
  (adminCards: ICard[], youtubeCards: ICard[]) => [...adminCards, ...youtubeCards],
);

export const selectCardById = (id: string) => createSelector(
  selectAdminCards,
  selectYoutubeCards,
  (adminCards: ICard[], youtubeCards: ICard[]) => {
    const adminCard = adminCards.find((card: ICard) => card.id === id);
    const youtubeCard = youtubeCards.find((card: ICard) => card.id === id);
    return adminCard || youtubeCard;
  },
);
