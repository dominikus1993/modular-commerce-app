import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { Inject, inject, Injectable } from "@angular/core";
import { ProductListResponse } from "./types";
import { catchError, map, Observable, of } from "rxjs";

export type GetProductsResult = { kind: "ok"; value: ProductListResponse } | {
  kind: "error";
  error: string;
};

@Injectable({
  providedIn: "root",
})
export class ProductListService {
  private client: HttpClient = inject(HttpClient);
  constructor(@Inject("BASE_API_URL") private baseUrl: string) {
  }

  public getProducts(
    query: string | null = null,
    page: number = 1,
    pageSize: number = 10,
    priceFrom: number | null = null,
    priceTo: number | null = null,
  ) : Observable<GetProductsResult> {
    let url = `${this.baseUrl}/catalog`;
    let params = new HttpParams();
    if (query) {
      params = params.set("query", query);
    }
    params = params.set("page", page.toString());
    params = params.set("pageSize", pageSize.toString());
    if (priceFrom) {
      params = params.set("priceFrom", priceFrom.toString());
    }
    if (priceTo) {
      params = params.set("priceTo", priceTo.toString());
    }
    return this.client.get<ProductListResponse>(url, { params })
      .pipe(
        map((response: ProductListResponse) => ({
          kind: "ok",
          value: response,
        } as GetProductsResult)),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 204) {
            return of<GetProductsResult>({ kind: "ok", value: {
              products: [],
              metadata: null,
              count: 0,
              total: 0,
            }});
          }
          return of<GetProductsResult>({ kind: "error", error: error.message });
        }),
      );
  }
}
