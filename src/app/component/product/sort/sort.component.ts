import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  public itemPrice: string;
  public sidebar: boolean = false;

  @Output() changePrice = new EventEmitter<string>();
  filterPrice(price: any) {
    this.changePrice.emit(price.target.value);
    this.itemPrice = price.target.value;
  }
  @Output() hideSidebar = new EventEmitter<boolean>();

  public colSidebar(): void {
    this.sidebar = !this.sidebar;
    this.hideSidebar.emit(this.sidebar);
  }
}
