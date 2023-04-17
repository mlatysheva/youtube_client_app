import { Component, OnInit } from '@angular/core';
import { ICard } from '../../models/card.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCardById } from '../../../redux/selectors/youtube.selectors';
import { AppState } from '../../../redux/state.models';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {

  searchItem$!: Observable<ICard | undefined>;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    this.searchItem$ = this.store.select(selectCardById( id ));
    if (!this.searchItem$) {
      this.router.navigate(['404']);
    }
  }

  goBack(): void {
    this.router.navigate(['/main']);
  }
}
