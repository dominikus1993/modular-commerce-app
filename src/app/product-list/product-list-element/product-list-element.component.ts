import { Component, Input } from '@angular/core';
import { Product } from '../shared/types';

@Component({
  selector: 'app-product-list-element',
  standalone: true,
  imports: [],
  templateUrl: './product-list-element.component.html',
  styleUrl: './product-list-element.component.scss'
})
export class ProductListElementComponent {
  @Input({required: true}) product!: Product;


  get isAvailable() {
    return this.product.availableQuantity > 0;
  }
}
