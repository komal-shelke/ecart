import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
})
export class ComponentComponent implements OnInit {
  public cartItem: number = 0;

  constructor(private cartservice: CartService) {
    this.cartservice.cartsubject.subscribe((data) => {
      this.cartItem = data;
    });
  }

  ngOnInit(): void {
    this.cartItemfunc();
  }

  public cartItemfunc(): void {
    if (localStorage.getItem('localCart') != null) {
      var cartCount = JSON.parse(localStorage.getItem('localCart') || '');
      this.cartItem = cartCount.length;
    }
  }
}
