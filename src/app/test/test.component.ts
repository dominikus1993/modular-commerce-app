import { HttpClient } from '@angular/common/http';
import { Component, Input, Signal, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductListService } from '../product-list/shared/product-list-service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  public client = inject(HttpClient)
  public title: string = "Test Component"
  @Input("message") public message: string = "Hello World"

  textInput: string = ""
  public count = signal(0)
  public productsService = inject(ProductListService)
  public products = this.productsService.getProducts()

  public increment(): void {
    this.count.update(x => x + 1)
  }

  public decrement(): void {
    this.count.update(x => x - 1)
  }

  public send() {
    this.title = this.textInput
    this.textInput = ""
  }
}
