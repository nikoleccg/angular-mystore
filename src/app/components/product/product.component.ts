import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { ImgComponent } from "../img/img.component";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    imports: [ImgComponent]
})
export class ProductComponent {
  @Input() product : Product = {
    id: 0,
    title: "",
    price: 0,
    image: ""
  }
  @Output() addedProduct = new EventEmitter<Product>();
  onAddToCart(){
    this.addedProduct.emit(this.product);
  }
}
