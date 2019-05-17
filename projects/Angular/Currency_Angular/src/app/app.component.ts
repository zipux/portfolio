import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
            <app-header></app-header>
            <!-- Where router should display a view -->
            <router-outlet></router-outlet>
            <app-footer></app-footer> <!-- from selector -->
             `,
})
export class AppComponent  {
    constructor() {

    }

}

