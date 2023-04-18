import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByViewsPipe } from './pipes/sort-by-views.pipe';
import { FilterByQueryPipe } from './pipes/filter-by-query.pipe';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ShowAgeDirective } from './directives/show-age.directive';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { StoreModule } from '@ngrx/store';
import { youtubeCardsReducer } from '../redux/reducers/youtube.reducer';
import { StaticCardsComponent } from './components/static-cards/static-cards.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    StaticCardsComponent,
    CardComponent,
    SortByDatePipe,
    SortByViewsPipe,
    FilterByQueryPipe,
    MainPageComponent,
    ShowAgeDirective,
    DetailsPageComponent,
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule, 
    StoreModule.forFeature('youtubeCards', youtubeCardsReducer),
  ],
  exports: [SearchResultsComponent, MainPageComponent, CardComponent ],
})
export class YoutubeModule {}
