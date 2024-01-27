import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgComponent } from './components/img/img.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "./components/products/products.component";
import { NavComponent } from "./components/nav/nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ImgComponent, FormsModule, CommonModule, ProductsComponent, NavComponent]
})

export class AppComponent {
  imgParent =  'https://media.es.wired.com/photos/6501e7429fa9000811a95fe8/16:9/w_2240,c_limit/Adobe%20Firefly.jpeg';
  toggleImageState = true;

  onLoaded(img: string) {
    console.log("Cargando Padre")
  }

  toggleImage() {
    this.toggleImageState = !this.toggleImageState;
  }
}
