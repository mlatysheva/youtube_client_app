import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminPageComponent } from './core/pages/admin-page/admin-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    canActivate: [() => inject(AuthGuard).canActivate()],
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  { path: 'admin', component: AdminPageComponent, canActivate: [() => inject(AuthGuard).canActivate()] },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
