import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { renderApplication } from '@angular/platform-server';

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
  // counter: number = 0;
  // counterFn : number = 0;

  constructor(){
    // before render
    // No async
    // Once time
    console.log('constructor', 'imgValue=>', this.img);
  }
  ngOnChanges(){
    // before - during render
    // change inputs -- multiples times
    console.log('ngOnChanges','imgValue=>', this.img);
  }
  ngOnInit(): void{
    // before render
    // async fetch -- once time
    // if (typeof window !== 'undefined') {
    //   this.counterFn = window.setInterval(() => {
    //     this.counter += 1;
    //     console.log("run counter");
    //   }, 1000);
    // }
    console.log('ngOnInit', 'imgValue=>', this.img);
  }
  ngAfterViewInit(){
    // after render
    // handler children -- once time
    console.log('ngAfterViewInit');
  }
  ngOnDestroy(){
    // delete -- once time
    console.log('ngOnDestroy');
    // if (typeof window !== 'undefined') {
    //   // Check if window is defined before using it
    //   window.clearInterval(this.counterFn);
    // }
  }

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
