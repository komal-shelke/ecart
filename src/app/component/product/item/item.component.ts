import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { Product } from 'src/app/component/models/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, OnChanges {
  public productList: Product[] = [];
  public OriginalProductList: Product[] = [];
  @Input() productCategory: string = '';
  @Input() productRating: number = 0;
  @Input() productPrice: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productCategory'] || ['productRating'] || ['productPrice']) {
      this.filter();
      this.sortProductByPrice(this.productPrice);
      // } else if (changes['productRating']) {
      //   this.filter();
      //   this.sortProductByPrice(this.productPrice);
      // } else if (changes['productPrice']) {
      //   this.sortProductByPrice(this.productPrice);
    }
  }

  ngOnInit() {
    // this.productList = this.productService.getProducts();
    this.productList = JSON.parse(localStorage.getItem('products')!);
    // this.OriginalProductList = this.productService.getProducts();
    this.OriginalProductList = JSON.parse(localStorage.getItem('products')!);
  }

  public filterbycategory(): void {
    this.productList = this.OriginalProductList.filter(
      (x) => x.category === this.productCategory
    );
  }

  public filterbyRating(): void {
    this.productList = this.OriginalProductList.filter(
      (y) => y.rating >= this.productRating
    );
  }

  public filter(): void {
    if (this.productCategory && this.productRating) {
      this.productList = this.OriginalProductList.filter(
        (z) =>
          z.rating >= this.productRating && z.category === this.productCategory
      );
    } else if (this.productRating) {
      this.productList = this.OriginalProductList.filter(
        (y) => y.rating >= this.productRating
      );
    } else if (this.productCategory) {
      this.productList = this.OriginalProductList.filter(
        (x) => x.category === this.productCategory
      );
    } else {
      this.productList = JSON.parse(JSON.stringify(this.OriginalProductList));
    }
  }

  public sortProductByPrice(value: string): void {
    if (value == 'ltoh') {
      this.productList.sort(
        (dec: { price: any }, asc: { price: any }) =>
          Number(dec.price) - Number(asc.price)
      );
    } else if (value == 'htol') {
      this.productList.sort(
        (des: { price: any }, asc: { price: any }) =>
          Number(asc.price) - Number(des.price)
      );
    } else if (value == 'all') {
      this.filter();
    }
  }
}
