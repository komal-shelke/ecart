import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from 'src/app/component/models/product';
import { CartService } from 'src/app/component/services/cart.service';

@Component({
  selector: 'app-subitem',
  templateUrl: './subitem.component.html',
  styleUrls: ['./subitem.component.scss'],
})
export class SubitemComponent implements OnInit {
  @Input() productItem: Product;

  constructor(private cartservice: CartService, private router: Router) {}

  public stars = [1, 2, 3, 4, 5];
  public cartNumber: number = 0;
  public itemsCart: any = [];
  public inCart: boolean;
  public isItemAddedToCart: boolean = false;
  public currentItem: any;
  private cartItems = [];

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('localCart')!) || [];
    this.currentItem =
      this.cartItems.find((x) => x.id === this.productItem.id) ||
      this.productItem;
  }

  public inc(): void {
    // this.cartItems = JSON.parse(localStorage.getItem('products')!);
    if (this.currentItem.qty != 8) {
      this.currentItem.qty += 1;
      this.productItem === this.currentItem;
    }
  }
  public dec(): void {
    if (this.currentItem.qty != 1) {
      this.currentItem.qty -= 1;
      this.productItem === this.currentItem;
    }
  }

  public addtoCart(cartData: any): void {
    this.cartItems = JSON.parse(localStorage.getItem('localCart')!) || [];
    const items = this.cartItems;
    if (items.length > 0) {
      const index = items.findIndex(
        (productId: any) => productId.id === cartData.id
      );

      if (index == -1) {
        items.push(cartData);
      } else {
        items[index].qty = cartData.qty;
      }
    } else {
      items.push(cartData);
    }

    localStorage.setItem('localCart', JSON.stringify(items));
    this.cartItems = JSON.parse(localStorage.getItem('localCart')!) || [];
    this.cartNumberFunc();
    this.isItemAddedToCart = true;
  }

  public onGoToCart(): void {
    this.router.navigate(['/cart']);
  }

  public isInCart(): boolean {
    const cartitems = this.cartItems;
    if (cartitems.length > 0) {
      return cartitems.some((x: { id: any }) => x.id === this.productItem.id);
    } else {
      return false;
    }
  }

  public cartNumberFunc(): void {
    var cartValue = this.cartItems;
    this.cartNumber = cartValue.length;
    this.cartservice.cartsubject.next(this.cartNumber);
  }
}
