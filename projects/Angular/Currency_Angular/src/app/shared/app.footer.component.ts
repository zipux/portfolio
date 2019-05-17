import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: ` 
            <hr />
            <h2>Footer</h2>
            <ul>
            <li> <a routerLink="/home" routerLinkActive="active">Home</a> </li>
            <li> <a routerLink="/about" routerLinkActive="active">About</a> </li>
            </ul>
            <p>this is my footer</p>
            Use <a href = "http://www.cryptocompare.com/api">www.cryptocompare.com/api</a>
             `,
})
export class AppFooterComponent  {
    constructor() {

    }

}