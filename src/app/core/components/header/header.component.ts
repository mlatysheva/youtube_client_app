import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { YoutubeService } from '../../../youtube/services/youtube.service';
import { DashboardService } from '../../services/dashboard.service';
import { Subscription, debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { clearAppState, loadSearchedVideos } from '../../../redux/actions/youtube.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  query = new FormControl();

  isAuth = false;
  
  subscription: Subscription = new Subscription();

  username = localStorage.getItem('login') || 'Login';

  constructor(
    public authService: AuthService,
    private router: Router,
    public youtubeService: YoutubeService,
    public dashboardService: DashboardService,
    private store: Store,
  ) {
    this.subscription = this.authService.isAuth$.subscribe((value) => {
      this.isAuth = value;
      this.username = localStorage.getItem('login') || 'Login';
    });
  }

  ngOnInit(): void {
    this.query.valueChanges
      .pipe(
        filter((query) => query.length >= 3),
        debounceTime(500),
        distinctUntilChanged(),
        map((query) => query.toLowerCase()),
        tap((query) => this.store.dispatch(loadSearchedVideos({ query }))),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.youtubeService.query$.next(input.value);
  }

  onAddVideoClick(): void {
    this.dashboardService.showDashboard = false;
    this.router.navigate(['/admin']);
  }

  toggleFilters(): void {
    this.dashboardService.toggleVisibility();
  }

  onLogout() {
    this.authService.onLogout();
    this.query.reset();
    this.store.dispatch(clearAppState());
  }

  goHome() {
    this.router.navigate(['/main']);
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}