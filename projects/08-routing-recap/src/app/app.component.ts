import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: ` <h1>Welcome to {{ title }}!</h1>
    @for (product of productTitles; track $index) {
    <p><a [routerLink]="['details',$index]">{{product}}</a></p>
  }
  <router-outlet />
  `,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
