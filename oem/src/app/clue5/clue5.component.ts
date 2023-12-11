import { Component } from '@angular/core';

@Component({
  selector: 'app-clue5',
  templateUrl: './clue5.component.html',
  styleUrl: './clue5.component.css'
})
export class Clue5Component {
  passed: boolean = false  
  constructor() {}

  handleAnswersGiven(passed: boolean) {
    if(passed) {
      this.passed = true
    }
  }
}
