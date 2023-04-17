import { Component, Input } from '@angular/core';
import { ICard } from '../../models/card.model';
import { Router } from '@angular/router';
import { DashboardService } from '../../../core/services/dashboard.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() searchItem?: ICard;

  constructor(
    private router: Router,
    public dashboardService: DashboardService,
  ) {}


  renderDetails(id: string): void {
    this.dashboardService.showDashboard = false;
    this.router.navigate([`/main/${id}`]);
  }
}
