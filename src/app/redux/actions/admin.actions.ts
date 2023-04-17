import { createAction, props } from '@ngrx/store';
import { ICard } from '../../youtube/models/card.model';

export const createAdminCardAction = createAction(
  '[Admin Page] Created Admin Card Successfully',
  props<ICard>(),
);

export const clearAdminState = createAction('[Header Logout] Cleared Admin State');
