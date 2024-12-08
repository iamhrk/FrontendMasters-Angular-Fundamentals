import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol>
      <li>Man's Search for meaning</li>
      <li>Love me again - John Newman</li>
      <li>Snatch</li>
    </ol>
  `,
  styles: `
  ol {
    list-style-type: upper-roman;
  }`,
})
export class AppComponent {}
