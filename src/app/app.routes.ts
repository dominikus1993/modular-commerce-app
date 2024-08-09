import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
    pathMatch: "full",
  },
  {
    path: "product/:id",
    component: ProductDetailsComponent,
    title: 'Product details',
  }
];
