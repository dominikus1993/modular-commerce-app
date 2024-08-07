import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListElementComponent } from './product-list-element.component';

describe('ProductListElementComponent', () => {
  let component: ProductListElementComponent;
  let fixture: ComponentFixture<ProductListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if product is available', () => {
    component.product = { availableQuantity: 1 } as any;
    expect(component.isAvailable).toBe(true);
  });

  it('should return false if product is not available', () => {
    component.product = { availableQuantity: 0 } as any;
    expect(component.isAvailable).toBe(false);
  });
});
