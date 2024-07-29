import { Component, EventEmitter, Input, Output, Signal, computed, inject } from '@angular/core';
import { ProductListElementComponent } from "./product-list-element/product-list-element.component";
import { GetProductsResult, ProductListService } from './shared/product-list-service';
import { tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { FilterMetadata } from './shared/types';

export interface ProductsInfo {
  metadata: FilterMetadata | null;
  count: number;
  total: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductListElementComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  private productsService: ProductListService = inject(ProductListService);
  @Input({required: true,})pageSize: number = 12 | 24 | 48 | 96;
  @Input({required: true})page: number = 1;
  @Output() productsMetadata: EventEmitter<ProductsInfo> = new EventEmitter();

  products = toSignal(this.getProducts(), {initialValue: { kind: "ok", value: { products: [], metadata: null, count: 0, total: 0 } }});

  isSuccess = computed(() => this.products().kind === "ok");

  productsList = computed(() => {
    const result = this.products();
    if (result.kind === "ok") {
      return result.value;
    }
    return { products: [], metadata: null, count: 0, total: 0 };
  });

  errorMessage = computed(() => {
    const result = this.products();
    if (result.kind === "error") {
      return result.error;
    }
    return "";
  });

  getProducts() {
    return this.productsService.getProducts().pipe(
      tap((result: GetProductsResult) => {
        if (result.kind === "ok") {
          this.productsMetadata.emit({ count : result.value.count, total: result.value.total, metadata: result.value.metadata });
        }
      })
    );
  }
}
