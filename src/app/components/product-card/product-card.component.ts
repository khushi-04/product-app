import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;  // Receives product data
  @Output() addToCart = new EventEmitter<number>(); // Event for button click

  onAddToCart() {
    this.addToCart.emit(this.product.id);
  }
}
