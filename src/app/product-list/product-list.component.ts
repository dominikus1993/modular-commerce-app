import { Component, EventEmitter, Input, OnInit, Output, Signal, computed, inject } from '@angular/core';
import { ProductListElementComponent } from "./product-list-element/product-list-element.component";
import { GetProductsResult, ProductListService } from './shared/product-list-service';
import { Observable, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { FilterMetadata } from './shared/types';
import { ProductListElementsComponent } from "./product-list-elements/product-list-elements.component";
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator'
import { AsyncPipe } from '@angular/common';

export interface ProductsInfo {
  metadata: FilterMetadata | null;
  count: number;
  total: number;
}


export type PageSize = 12 | 24 | 48 | 96;

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductListElementComponent, ProductListElementsComponent, MatPaginatorModule, AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  private productsService: ProductListService = inject(ProductListService);
  public pageSize: PageSize = 12;
  public page: number = 1;

  products$: Observable<GetProductsResult> = this.getProducts()


  getProducts() {
    return this.productsService.getProducts(null, this.page, this.pageSize);
  }

  onChangePage(event: PageEvent) {
    console.log(event.pageIndex);
    console.log(event.pageSize);
  }
}
