import { Component } from '@angular/core';

@Component({
  selector: 'app-clue9',
  templateUrl: './clue9.component.html',
  styleUrl: './clue9.component.css'
})
export class Clue9Component {
  passed: boolean = false  
  constructor() {}

  handleAnswersGiven(passed: boolean) {
    if(passed) {
      this.passed = true
    }
  }
}
