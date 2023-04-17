import { AppState } from '../state.models';

export const selectAdminCards = (state: AppState) => state.adminCards.cards;

