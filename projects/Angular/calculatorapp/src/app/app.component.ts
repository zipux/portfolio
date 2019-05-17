import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculatorapp';
  sumFirst:  string;
  sumSecond: string;
  sumResult: number;

  subFirst: string;
  subSecond: string;
  subResult: number;

  byFirst:  string;
  bySecond: string;
  byResult: number;

  divFirst: string;
  divSecond: string;
  divResult: number;

  sum() {
    this.sumResult = (parseFloat (this.sumFirst)+parseFloat(this.sumSecond)) 
    this.clearAllTexts()
  }

  sub() {
    this.subResult = (parseFloat (this.subFirst)-parseFloat(this.subSecond))
    this.clearAllTexts()
  }

  multiplication() {
    this.byResult = (parseFloat (this.byFirst)*parseFloat(this.bySecond))
    this.clearAllTexts()
  }

  division() {
    this.divResult = (parseFloat (this.divFirst)/parseFloat(this.divSecond))
    this.clearAllTexts()
  }

   clearAllTexts() { 
    this.sumFirst = '';
    this.sumSecond = '';
    this.subFirst = '';
    this.subSecond = '';
    this.byFirst = '';
    this.bySecond = '';
    this.divFirst = '';
    this.divSecond = '';
 }
}
