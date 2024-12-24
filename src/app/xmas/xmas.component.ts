import { Component } from '@angular/core';

@Component({
  selector: 'app-xmas',
  templateUrl: './xmas2024.component.html',
  styleUrl: './xmas2024.component.css'
})
export class XmasComponent {
  passed: boolean = false  
  constructor() {}

  handleAnswersGiven(passed: boolean) {
    if(passed) {
      this.passed = true
    }
  }
}