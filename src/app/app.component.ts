import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <button type="button" (click)="go('reporting')">Reporting</button>
    <button type="button" (click)="go('ordering')">Ordering</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'pocmfe';
  constructor(private router: Router) {}
  go = (route: string): void => { this.router.navigate([route]); }
}
