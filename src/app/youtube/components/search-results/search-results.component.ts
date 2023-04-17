import { Component } from '@angular/core';
import { DashboardService } from '../../../core/services/dashboard.service';
import { Store } from '@ngrx/store';
import { selectAllCards } from '../../../redux/selectors/youtube.selectors';
import { AppState } from '../../../redux/state.models';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {

  cards$ = this.store.select(selectAllCards);
  
  constructor(
    public dashboardService: DashboardService,
    private store: Store<AppState>,
  ) {}
}

