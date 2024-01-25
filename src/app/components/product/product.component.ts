import { Component, Input } from '@angular/core';
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
    id: "",
    name: "",
    price: 0,
    img: ""
  }
}
