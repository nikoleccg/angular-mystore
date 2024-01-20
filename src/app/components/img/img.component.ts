import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent {
  @Input() img : string = 'Valor inicial';
  @Output() loaded = new EventEmitter<string>();

  imgDefault='./../../../assets/images/default.jpg';
  imgError='./../../../assets/images/img2.jpg';

  handleImageError() {
    // this.img = './../../../assets/images/default.jpg'; // Set the default image URL
    this.img = this.imgError;
  }

  imgLoaded(){
    console.log("Cargando Hijo");
    this.loaded.emit(this.img)
  }

}
