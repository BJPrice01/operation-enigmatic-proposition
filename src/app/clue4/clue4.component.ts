import { Component } from '@angular/core';

@Component({
  selector: 'app-clue4',
  templateUrl: './clue4.component.html',
  styleUrl: './clue4.component.css'
})
export class Clue4Component {
  passed: boolean = false  
  constructor() {}

  handleAnswersGiven(passed: boolean) {
    if(passed) {
      this.passed = true
    }
  }
}
