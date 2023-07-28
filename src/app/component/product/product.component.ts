import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  public category = '';
  public rating = 0;
  public price: string = 'all';
  public sidebarItem: any;

  public findfilter(type: string): void {
    // console.log(type);
    this.category = type;
  }

  public findRating(star: number): void {
    // console.log(star);
    this.rating = star;
  }

  public findPrice(itemPrice: string): void {
    // console.log(itemPrice);
    this.price = itemPrice;
  }

  public colSidebar(itemFilter: any): void {
    this.sidebarItem = itemFilter;
  }
}
