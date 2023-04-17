import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SharedModule } from '../shared/shared.module';
import { SearchDashboardComponent } from './components/search-dashboard/search-dashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ApiKeyInterceptor } from '../youtube/interceptors/api-key.interceptor';
import { BaseUrlInterceptor } from '../youtube/interceptors/base-url.interceptor';
import { StoreModule } from '@ngrx/store';
import { adminCardsReducer } from '../redux/reducers/admin.reducer';


@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundPageComponent,
    SearchDashboardComponent,
    AdminPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature('adminCards', adminCardsReducer),
  ],
  exports: [HeaderComponent, NotFoundPageComponent, SearchDashboardComponent, AdminPageComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true }, 
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true }],
})
export class CoreModule { }
