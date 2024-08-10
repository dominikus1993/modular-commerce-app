import { Component, Inject, Input } from '@angular/core';
import { Product, ProductImage } from '../shared/types';
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


  constructor(@Inject("BASE_API_URL") private baseUrl: string){

  }

  get isAvailable() {
    return this.product.availableQuantity > 0;
  }

  get mainImage(): ProductImage {
    if (this.product.images && this.product.images.length > 0) {
      return {...this.product.images[0], link: `${this.baseUrl}${this.product.images[0].link}`};
    }
    return { link: '', alt: 'image' };
  }
}
