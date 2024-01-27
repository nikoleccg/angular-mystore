import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [ProductComponent, CommonModule]
})
export class ProductsComponent {
  myShoppingCart: Product[] = [];
  total = 0;
  products:Product[] = [{
    id: 'a1',
    name: 'Product 1',
    img: './../../../assets/images/img1.jpg',
    price: 60
  },{
    id: 'a2',
    name: 'Product 2',
    img: './../../../assets/images/img2.jpg',
    price: 20
  },{
    id: 'a3',
    name: 'Product 3',
    img: './../../../assets/images/img3.jpg',
    price: 20
  }]

  onAddToShoppingCart(product: Product){
    this.myShoppingCart.push(product)
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
