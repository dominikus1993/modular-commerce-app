import { TestBed } from '@angular/core/testing';

import { ProductListService } from "./product-list-service"
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';

describe('ProductListServiceService', () => {
  let service: ProductListService;
  let mockHttpClient: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: "BASE_API_URL", useValue: "http://localhost:5011"},
        ProductListService
      ]
  });
    service = TestBed.inject(ProductListService);
    mockHttpClient = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return products', async () => {
    const mockResponse = { count: 0, total: 0, products: [], metadata: null };
    const result$ = service.getProducts();
    const res = firstValueFrom(result$);

    const req = mockHttpClient.expectOne('http://localhost:5011/catalog?page=1&pageSize=10');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

    expect(await res).toEqual({ kind: "ok", value: mockResponse });
  });


  it('should return error', async () => {
    const result$ = service.getProducts();
    const res = firstValueFrom(result$);

    const req = mockHttpClient.expectOne('http://localhost:5011/catalog?page=1&pageSize=10');
    expect(req.request.method).toBe('GET');
    req.error(new ProgressEvent('network error!'));

    const response = await res;
    expect(response.kind).toEqual("error");
  });

  afterEach(() => {
    mockHttpClient.verify();
  });
});
