import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      [app root]
      <app-book-list></app-book-list>
    </div>
  `,
  styles: ['.app { background-color:#d5f4e6; margin:10px; padding:10px}']
})
export class AppComponent {
  title = 'app';
}
