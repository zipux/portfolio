import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    template: `
                <p>about page</p>
                <input type="text" minlength="2" pattern="[A-Za-z]+" name="myNameValidation" #myNameValidation="ngModel" [(ngModel)]="myName"  required >
                <div [hidden]="myNameValidation.valid || myNameValidation.pristine">
                This name is invalid.</div>
                <p *ngIf="myNameValidation?.errors?.pattern">
                Only alphabetical characters are allowed.</p>
                <p *ngIf="myNameValidation?.errors?.minlength">
                You must enter at least two characters.</p> <br>
                <button (click)="setName()" [disabled]="!myNameValidation.valid" >Save</button>
             `,
})
export class AppAbout  {

    myName = ""
    setName() {
        sessionStorage.setItem("Name", this.myName);
    }
}


