import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public getProductDetails: any = [];
  public stars = [1, 2, 3, 4, 5];
  public isEdit: boolean;
  public loginForm: any;
  public addProduct: boolean = false;

  ngOnInit() {
    this.productDetails();
  }

  public onClick(item?: any, value?: boolean): void {
    this.addProduct = !this.addProduct;
    this.isEdit = value;
    if (this.addProduct) {
      this.createForm();
    }

    if (this.isEdit) {
      this.loginForm.patchValue(item);
    }
  }

  public updateitem(loginForm): void {
    this.updateitem = loginForm.item;
    localStorage.setItem('products', JSON.stringify(this.getProductDetails));
    this.onClick();
  }

  public onClose(): void {
    this.addProduct = !this.addProduct;
  }

  public submit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const item = this.loginForm.value;

    if (this.getProductDetails.length > 0) {
      const index = this.getProductDetails.findIndex(
        (productId: any) => productId.id === item.id
      );

      if (index == -1) {
        this.addItem(item);
      } else {
        this.getProductDetails[index] = item;
      }
    } else {
      this.addItem(item);
      // item.id = this.getProductDetails.lenth + 1;
      // this.getProductDetails.push(item);
    }

    localStorage.setItem('products', JSON.stringify(this.getProductDetails));
    this.onClose();
  }

  public addItem(item1): void {
    // const item = this.loginForm.value;
    item1.id = this.getProductDetails.length + 1;
    item1.imgurl = item1.category;
    this.getProductDetails.unshift(item1);
  }

  public productDetails(): void {
    if (localStorage.getItem('products')) {
      this.getProductDetails = JSON.parse(localStorage.getItem('products')!);
    }
  }

  public createForm(): void {
    this.loginForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(14),
      ]),
      price: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      qty: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(84),
      ]),

      rating: new FormControl(null, [Validators.required]),
    });
  }

  public deleteItem2(item): void {
    if (localStorage.getItem('products')) {
      this.getProductDetails = JSON.parse(localStorage.getItem('products')!);
      const index = this.getProductDetails.findIndex(
        (product) => product.id === item
      );
      if (index !== -1) {
        this.getProductDetails.splice(index, 1);
        localStorage.setItem(
          'products',
          JSON.stringify(this.getProductDetails)
        );
        this.productDetails();
      }
    }
  }
  categories = [
    { category: 'mob' },
    { category: 'lap' },
    { category: 'tel' },
    { category: 'headphones' },
  ];
}
