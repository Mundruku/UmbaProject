import { Component } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  template: `<app-navbar></app-navbar><router-outlet></router-outlet>

  `
})
export class AppComponent {
  title = 'UbberWeb';
}
