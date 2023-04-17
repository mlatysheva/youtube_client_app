import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { clearAppState } from '../../redux/actions/youtube.actions';
import { clearAdminState } from '../../redux/actions/admin.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isAuth$ = new BehaviorSubject<boolean>(
    !!localStorage.getItem('login'),
  );

  constructor(
    private router: Router,
    private store: Store,
  ) { }

  onLogin(login: string, password: string) {
    if (!login || !password) return;
    localStorage.setItem('login', login);
    this.isAuth$.next(true);
    this.router.navigateByUrl('');
  }

  onLogout() {
    localStorage.removeItem('login');
    this.isAuth$.next(false);
    this.store.dispatch(clearAppState());
    this.store.dispatch(clearAdminState());
    this.router.navigateByUrl('/auth');
  }
}
