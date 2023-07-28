export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgurl: string;
  rating: number;
  category: string;
  qty: number;
  type: string;
  stars: number;
  forEach: any;

  constructor(
    id = 0,
    name = '',
    description = '',
    price = 0,
    imgurl = '',
    rating = 0,
    category = '',
    qty = 0
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imgurl = imgurl;
    this.rating = rating;
    this.category = category;
    this.qty = qty;
  }
}
