import { Component } from '@angular/core';

@Component({
  selector: 'app-clue3',
  templateUrl: './clue3.component.html',
  styleUrl: './clue3.component.css'
})
export class Clue3Component {
  passed: boolean = false  
  constructor() {}

  handleAnswersGiven(passed: boolean) {
    if(passed) {
      this.passed = true
    }
  }
}
