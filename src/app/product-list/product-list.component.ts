import { Component } from '@angular/core';
import { ProductListElementComponent } from "./product-list-element/product-list-element.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductListElementComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

}
