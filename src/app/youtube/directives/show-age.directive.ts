/* eslint-disable import/no-extraneous-dependencies */
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { COLORS, MILLISEC } from '../../shared/constants';
@Directive({
  selector: '[appShowAge]',
})
export class ShowAgeDirective implements OnInit {

  constructor(
    private el: ElementRef,
  ) { }

  @Input() dateOfPublishing?: string;

  color?: string = 'red';

  ngOnInit(): void {
    this.showAge(this.el);
  }

  showAge(el: ElementRef): void {
    if (!this.dateOfPublishing) {
      this.color = COLORS.red;
      el.nativeElement.style.backgroundColor = this.color;
      return;
    }
    const today = new Date().getTime();
    const publishedAt = new Date(this.dateOfPublishing).getTime();
    const diff = (today - publishedAt) / MILLISEC;

    switch (true) {
      case (diff > 182):
        this.color = COLORS.red;
        break;
      case diff >= 30:
        this.color = COLORS.yellow;
        break;
      case diff > 7:
        this.color = COLORS.green;
        break;
      default:
        this.color = COLORS.blue;
    }

    el.nativeElement.style.backgroundColor = this.color;
  }
}
