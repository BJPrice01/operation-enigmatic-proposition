import { Component } from '@angular/core';

@Component({
  selector: 'app-clue1',
  templateUrl: './clue1.component.html',
  styleUrl: './clue1.component.css'
})
export class Clue1Component {
  passed: boolean = false  
  constructor() {}

  handleAnswersGiven(passed: boolean) {
    if(passed) {
      this.passed = true
    }
  }
}
