import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    title: 'Home page',
  },
  {
    path: "product/:id",
    component: ProductDetailsComponent,
    title: 'Product details',
  }
];
