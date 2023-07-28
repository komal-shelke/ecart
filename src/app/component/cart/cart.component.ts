import { Component } from '@angular/core';
import { CartService } from 'src/app/component/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(private cartservice: CartService) {}

  ngOnInit() {
    this.cartDetails();
    this.sumCart();
  }

  public getCartDetails: any = [];
  public cartNumber: number;
  public total: number = 0;

  public cartDetails(): void {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
    }
  }

  public sumCart(): void {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      this.total = this.getCartDetails.reduce(function (
        acc: any,
        product: any
      ) {
        return acc + product.price * product.qty;
      },
      0);
    }
  }

  public emptyCart(): void {
    localStorage.removeItem('localCart');
    this.getCartDetails = [];
    this.total = 0;
    var cartValue = JSON.parse(localStorage.getItem('localCart')!) || [];
    this.cartNumber = cartValue.length;
    this.cartservice.cartsubject.next(this.cartNumber);
  }
  public inc(item): void {
    if (item.qty != 8) {
      item.qty += 1;
    }

    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.sumCart();
  }

  public dec(item): void {
    if (item.qty > 1) {
      item.qty -= 1;
    }

    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
    this.sumCart();
  }

  public deleteItem(getCartDetails: any): void {
    if (localStorage.getItem('localCart')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      const index = this.getCartDetails.findIndex(
        (item) => item.id === getCartDetails
      );
      if (index !== -1) {
        this.getCartDetails.splice(index, 1);
        localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
        this.cartDetails();
        this.sumCart();
        const cartValue = JSON.parse(localStorage.getItem('localCart')!);
        this.cartNumber = cartValue.length;
        this.cartservice.cartsubject.next(this.cartNumber);
      }
    }
  }
}

// fn name()->Return{
//  var
// }
// fn name()->Return{
//   new = name()
// }
