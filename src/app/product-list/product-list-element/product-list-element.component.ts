import { Component, Input } from '@angular/core';
import { Product } from '../shared/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list-element',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list-element.component.html',
  styleUrl: './product-list-element.component.scss'
})
export class ProductListElementComponent {
  @Input({required: true}) product!: Product;


  get isAvailable() {
    return this.product.availableQuantity > 0;
  }
}
