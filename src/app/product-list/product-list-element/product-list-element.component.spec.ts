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
});
