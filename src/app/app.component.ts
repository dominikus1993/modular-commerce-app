import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductListComponent, ProductsInfo } from './product-list/product-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ProductListComponent]
})
export class AppComponent {
  title = 'app';
  pageSize = 12
  info: ProductsInfo = { metadata: null, count: 0, total: 0 };

  public handleTotalProducts(meta: ProductsInfo) {
    this.info = meta;
  }
}
