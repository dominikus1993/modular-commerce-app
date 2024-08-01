import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListElementsComponent } from './product-list-elements.component';

describe('ProductListElementComponent', () => {
  let component: ProductListElementsComponent;
  let fixture: ComponentFixture<ProductListElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
