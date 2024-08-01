import { Component, EventEmitter, Input, Output, Signal, computed, inject } from '@angular/core';
import { ProductListElementComponent } from "./product-list-element/product-list-element.component";
import { GetProductsResult, ProductListService } from './shared/product-list-service';
import { tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { FilterMetadata } from './shared/types';
import { ProductListElementsComponent } from "./product-list-elements/product-list-elements.component";

export interface ProductsInfo {
  metadata: FilterMetadata | null;
  count: number;
  total: number;
}


export type PageSize = 12 | 24 | 48 | 96;

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductListElementComponent, ProductListElementsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  private productsService: ProductListService = inject(ProductListService);
  private pageSize: PageSize = 12;
  private page: number = 1;

  products = toSignal(this.getProducts(), {initialValue: { kind: "ok", value: { products: [], metadata: null, count: 0, total: 0 } }});

  isSuccess = computed(() => this.products().kind === "ok");

  productsListResult = computed(() => {
    const result = this.products();
    if (result.kind === "ok") {
      return result.value;
    }
    return { products: [], metadata: null, count: 0, total: 0 };
  });

  productsList = computed(() => {
    const result = this.productsListResult();
    return result.products;
  });

  errorMessage = computed(() => {
    const result = this.products();
    if (result.kind === "error") {
      return result.error;
    }
    return "";
  });

  getProducts() {
    return this.productsService.getProducts(null, this.page, this.pageSize);
  }
}
