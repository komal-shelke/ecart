import { Injectable } from '@angular/core';
import { Product } from 'src/app/component/models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'samsung',
      'this is product 5 desciption,product is really nice',
      12230,
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/413u56t%2BCiL._SX300_SY300_QL70_ML2_.jpg',
      1,
      'mob',
      1
    ),

    new Product(
      2,
      'product 2',
      'this is product 7 desciption,product is really nice',
      90220,
      'https://media.istockphoto.com/id/962810062/photo/smart-tv-with-water-drops-on-screen.jpg?s=1024x1024&w=is&k=20&c=hawZHz5h72bPHlw9DlZplU0BlxWlckXrN-w6sT_C--c=',
      3,
      'tel',
      1
    ),
    new Product(
      3,
      'product 3',
      'this is product 1 desciption,product is really nice',
      10000,
      'https://freepngimg.com/save/162050-laptop-notebook-free-hd-image/1280x905',
      4,
      'lap',
      1
    ),
    new Product(
      4,
      'product 4',
      'this is product 2 desciption,product is really nice',
      10640,
      'https://freepngimg.com/save/162050-laptop-notebook-free-hd-image/1280x905',
      3,
      'lap',
      1
    ),
    new Product(
      5,
      'product 3',
      'this is product 3 desciption,product is really nice',
      54400,
      'https://freepngimg.com/save/162050-laptop-notebook-free-hd-image/1280x905',
      4,
      'lap',
      1
    ),
    new Product(
      6,
      'redmi',
      'this is product redmi desciption,product is really nice',
      13390,
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/413u56t%2BCiL._SX300_SY300_QL70_ML2_.jpg',
      1,
      'mob',
      1
    ),
    new Product(
      7,
      'realme',
      'this is product 5 desciption,product is really nice',
      1240,
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/413u56t%2BCiL._SX300_SY300_QL70_ML2_.jpg',
      1,
      'mob',
      1
    ),
    new Product(
      8,
      'apple14',
      'this is product 6 desciption,product is really nice',
      70220,
      'https://media.istockphoto.com/id/962810062/photo/smart-tv-with-water-drops-on-screen.jpg?s=1024x1024&w=is&k=20&c=hawZHz5h72bPHlw9DlZplU0BlxWlckXrN-w6sT_C--c=',
      4,
      'tel',
      3
    ),
    new Product(
      9,
      'apple',
      'this is product 7 desciption,product is really nice',
      93390,
      'https://media.istockphoto.com/id/962810062/photo/smart-tv-with-water-drops-on-screen.jpg?s=1024x1024&w=is&k=20&c=hawZHz5h72bPHlw9DlZplU0BlxWlckXrN-w6sT_C--c=',
      2,
      'tel',
      1
    ),
    new Product(
      10,
      'product 2',
      'this is product 2 desciption,product is really nice',
      12140,
      'https://freepngimg.com/save/162050-laptop-notebook-free-hd-image/1280x905',
      3,
      'lap',
      1
    ),
    new Product(
      11,
      'product 5',
      'this is product 5 desciption,product is really nice',
      91230,
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/413u56t%2BCiL._SX300_SY300_QL70_ML2_.jpg',
      5,
      'mob',
      1
    ),
    new Product(
      12,
      'product 5',
      'this is product 5 desciption,product is really nice',
      12230,
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/413u56t%2BCiL._SX300_SY300_QL70_ML2_.jpg',
      3,
      'mob',
      1
    ),
    new Product(
      13,
      'product 5',
      'this is product 5 desciption,product is really nice',
      113330,
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/413u56t%2BCiL._SX300_SY300_QL70_ML2_.jpg',
      4,
      'mob',
      1
    ),
    new Product(
      14,
      'product 7',
      'this is product 7 desciption,product is really nice',
      90022,
      'https://media.istockphoto.com/id/962810062/photo/smart-tv-with-water-drops-on-screen.jpg?s=1024x1024&w=is&k=20&c=hawZHz5h72bPHlw9DlZplU0BlxWlckXrN-w6sT_C--c=',
      1,
      'tel',
      1
    ),
    new Product(
      15,
      'product 7',
      'this is product 7 desciption,product is really nice',
      93300,
      'https://media.istockphoto.com/id/962810062/photo/smart-tv-with-water-drops-on-screen.jpg?s=1024x1024&w=is&k=20&c=hawZHz5h72bPHlw9DlZplU0BlxWlckXrN-w6sT_C--c=',
      5,
      'tel',
      1
    ),
    new Product(
      15,
      'product new',
      'this is product 7 desciption,product is really nice',
      93300,
      'https://media.istockphoto.com/id/962810062/photo/smart-tv-with-water-drops-on-screen.jpg?s=1024x1024&w=is&k=20&c=hawZHz5h72bPHlw9DlZplU0BlxWlckXrN-w6sT_C--c=',
      5,
      'tel',
      1
    ),
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
