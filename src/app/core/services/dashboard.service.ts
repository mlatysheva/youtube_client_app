import { Injectable } from '@angular/core';
import { ORDER } from '../../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  showDashboard = false;

  dateSortOrder = '';

  viewsSortOrder = '';

  durationSortOrder = '';

  filterQuery = '';

  setFilterQuery(value: string): void {
    this.filterQuery = value;
  }

  toggleVisibility(): void {
    this.showDashboard = !this.showDashboard;
  }

  sortByDate(): void {
    if (this.dateSortOrder === ORDER.desc) {
      this.dateSortOrder = ORDER.asc;
    } else {
      this.dateSortOrder = ORDER.desc;
    }
  }

  sortByViews(): void {
    if (this.viewsSortOrder === ORDER.desc) {
      this.viewsSortOrder = ORDER.asc;
    } else {
      this.viewsSortOrder = ORDER.desc;
    }
  }

  sortByDuration(): void {
    if (this.durationSortOrder === ORDER.desc) {
      this.durationSortOrder = ORDER.asc;
    } else {
      this.durationSortOrder = ORDER.desc;
    }
  }
}
