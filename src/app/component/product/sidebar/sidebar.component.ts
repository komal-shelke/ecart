import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() d: any;
  @Output() changeFilter = new EventEmitter<string>();
  @Output() changeRating = new EventEmitter<number>();

  public categoryType: string;
  public star: number;

  public filterItem(value: string): void {
    this.changeFilter.emit(value);
    this.categoryType = value;
  }

  public filterRating(stars: number): void {
    this.changeRating.emit(stars);

    this.star = stars;
  }

  categories = [
    { type: 'lap', name: 'Laptops', icon: 'bi bi-laptop' },
    { type: 'mob', name: 'Mobile', icon: 'bi bi-phone' },
    { type: 'tel', name: 'Television', icon: 'bi bi-tv' },
    { type: 'headphones', name: 'headphones', icon: 'bi bi-headphones' },
  ];

  ratings = [
    { value: 4, stars: [true, true, true, true, false] },
    { value: 3, stars: [true, true, true, false, false] },
    { value: 2, stars: [true, true, false, false, false] },
    { value: 1, stars: [true, false, false, false, false] },
  ];
}
