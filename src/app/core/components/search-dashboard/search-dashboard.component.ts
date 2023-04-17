import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { AuthService } from '../../../auth/services/auth.service';
import { ORDER } from '../../../shared/constants';

@Component({
  selector: 'app-search-dashboard',
  templateUrl: './search-dashboard.component.html',
  styleUrls: ['./search-dashboard.component.scss'],
})
export class SearchDashboardComponent {
  constructor(
    public dashboardService: DashboardService,
    public authService: AuthService,
  ) {}

  filterQuery = '';

  dateSortOrder = ORDER.desc;

  viewsSortOrder = ORDER.desc;

  setFilterByWord(): void {
    this.dashboardService.setFilterQuery(this.filterQuery);
  }

  sortByDate(): void {
    if (this.dateSortOrder === ORDER.desc) {
      this.dateSortOrder = ORDER.asc;
    } else {
      this.dateSortOrder = ORDER.desc;
    }
    this.dashboardService.sortByDate();
  }

  sortByViews(): void {
    if (this.viewsSortOrder === ORDER.desc) {
      this.viewsSortOrder = ORDER.asc;
    } else {
      this.viewsSortOrder = ORDER.desc;
    }
    this.dashboardService.sortByViews();
  }
}
