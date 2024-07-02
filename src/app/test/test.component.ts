import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  public title: string = "Test Component"
  @Input("message") public message: string = "Hello World"
}
