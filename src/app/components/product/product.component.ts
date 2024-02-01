import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { ImgComponent } from "../img/img.component";
import { CommonModule } from '@angular/common';
import { time } from 'console';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.scss',
    imports: [ImgComponent, CommonModule, ReversePipe, TimeAgoPipe, HighlightDirective]
})
export class ProductComponent {
  now: Date = new Date();
  pastDate: Date = new Date(2023,12,1);

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
