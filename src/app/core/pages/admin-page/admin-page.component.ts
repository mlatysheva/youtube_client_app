import { Component, OnInit } from '@angular/core';
import { ICard } from '../../../youtube/models/card.model';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { Store } from '@ngrx/store';
import { createAdminCardAction } from '../../../redux/actions/admin.actions';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {

  addVideoForm!: FormGroup;

  get title() {
    return this.addVideoForm.controls['title'];
  }

  get description() {
    return this.addVideoForm.controls['description'];
  }

  get videoLink() {
    return this.addVideoForm.controls['videoLink'];
  }

  get image() {
    return this.addVideoForm.controls['image'];
  }

  get date() {
    return this.addVideoForm.controls['date'];
  }

  message = '';

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.addVideoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', [Validators.maxLength(255)]],
      image: ['', [Validators.required, this.urlValidator()]],
      videoLink: ['', [Validators.required, this.urlValidator()]],
      date: [null, [Validators.required, this.dateValidator()]],
    });
  }

  urlValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value as string;
      if (!value) return null;
      else {
        const url = new URL(value);
        return (url.protocol == 'http:' || url.protocol == 'https:' || url.protocol == 'data:') ? null : { urlValidator: true };
      }
    };
  }

  dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = new Date(control.value).getTime();
      if (!value) return null;
      else {
        const today = Date.now();
        return value <= today ? null : { dateValidator: true };
      }
    };
  }

  createCardData(): ICard {
    const newCard: ICard = {
      kind: '',
      etag: '',
      id: uuidv4(),
      snippet: {
        publishedAt: this.addVideoForm.value.date,
        channelId: '',
        title: this.addVideoForm.value.title,
        description: this.addVideoForm.value.description,
        thumbnails: {
          default: {
            url: this.addVideoForm.value.image,
            width: 100,
            height: 100,
          },
          medium: {
            url: this.addVideoForm.value.image,
            width: 200,
            height: 200,
          },
          high: {
            url: this.addVideoForm.value.image,
            width: 300,
            height: 300,
          },
          standard: {
            url: this.addVideoForm.value.image,
            width: 200,
            height: 200,
          },
          maxres: {
            url: this.addVideoForm.value.image,
            width: 400,
            height: 400,
          },
        },
        channelTitle: '',
        tags: [],
        categoryId: '',
        liveBroadcastContent: '',
        localized: {
          title: this.addVideoForm.value.title,
          description: this.addVideoForm.value.description,
        },
      },
      statistics: {
        viewCount: '0',
        likeCount: '0',
        dislikeCount: '0',
        favoriteCount: '0',
        commentCount: '0',
      },
    };
    return newCard;
  }

  onSubmit(): void {
    const newCard = this.createCardData();
    this.store.dispatch(createAdminCardAction(newCard));
    this.message = newCard.snippet.title + ' has been added to the database';
    alert(`New card:
    title: ${newCard.snippet.title}
    description: ${newCard.snippet.description}
    image: ${newCard.snippet.thumbnails.default}
    date: ${this.addVideoForm.value.date}
    has been successfully added`);
    setTimeout(() => {
      this.router.navigate(['']);
    }, 1000);
  }
}
