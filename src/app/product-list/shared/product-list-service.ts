import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { ProductListResponse } from './types';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private client: HttpClient = inject(HttpClient)
  constructor(@Inject('BASE_API_URL') private baseUrl: string) {

  }

  public getProducts(query: string | null = null, page: number = 1, pageSize: number = 10, priceFrom: number | null = null, priceTo: number | null = null) {
    let url = `${this.baseUrl}/catalog`;
    let params = new HttpParams();
    if (query) {
      params = params.set('query', query);
    }
    params = params.set('page', page.toString());
    params = params.set('pageSize', pageSize.toString());
    if (priceFrom) {
      params = params.set('priceFrom', priceFrom.toString());
    }
    if (priceTo) {
      params = params.set('priceTo', priceTo.toString());
    }
    return this.client.get<ProductListResponse>(url, { params });
  }
}
