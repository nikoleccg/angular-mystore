import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [ProductComponent,
      CommonModule,
      HttpClientModule]
})
export class ProductsComponent {
  myShoppingCart: Product[] = [];
  total = 0;
  products:Product[] = []

  constructor(
    private storeService: StoreService,
    private productService: ProductsService
  ){
    this.myShoppingCart = this.storeService.getShoppingCart()
  }

  ngOnInit(): void {
    this.productService.getAllProduct()
    .subscribe(data => {
      this.products = data;
    })
  }

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
