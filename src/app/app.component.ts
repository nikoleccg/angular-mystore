import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgComponent } from './components/img/img.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "./components/product/product.component";
import { Product } from './models/product.model';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ImgComponent, FormsModule, CommonModule, ProductComponent]
})

export class AppComponent {
  imgParent =  'https://media.es.wired.com/photos/6501e7429fa9000811a95fe8/16:9/w_2240,c_limit/Adobe%20Firefly.jpeg';
  toggleImageState = true;

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

  onLoaded(img: string) {
    console.log("Cargando Padre")
  }

  toggleImage() {
    this.toggleImageState = !this.toggleImageState;
  }
}
