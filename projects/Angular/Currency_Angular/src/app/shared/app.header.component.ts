import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: ` 
                <h2>Welcome {{getName()}}</h2>
                <ul>
                <li> <a routerLink="/home" routerLinkActive="active">Home</a> </li>
                <li> <a routerLink="/about" routerLinkActive="active">About</a> </li>
                </ul>
                <hr/>
             `,
})
export class AppHeaderComponent  {
    getName() {
        return  sessionStorage.getItem('Name')
    }
}