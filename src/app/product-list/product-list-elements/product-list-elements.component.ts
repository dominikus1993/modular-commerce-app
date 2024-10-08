import { Component, Input } from '@angular/core';
import { Product } from '../shared/types';
import { ProductListElementComponent } from '../product-list-element/product-list-element.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-product-list-elements',
  standalone: true,
  imports: [ProductListElementComponent, MatSlideToggleModule],
  templateUrl: './product-list-elements.component.html',
  styleUrl: './product-list-elements.component.scss'
})
export class ProductListElementsComponent {
  @Input({required: true}) products!: Product[];
}
