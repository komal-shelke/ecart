import { Component } from '@angular/core';
import { ProductService } from './component/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private productService: ProductService) {}
  title = 'shopapp';

  ngOnInit() {
    if (!localStorage.getItem('products')) {
      const items = this.productService.getProducts();
      localStorage.setItem('products', JSON.stringify(items));
    }
  }
}
