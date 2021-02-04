import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  letterCombos = ['ab', 'ac', 'ad'];
  currentCombo: string;
  get selected(): string {
    return this.currentCombo;
  }
  set selected(combo: string) {
    console.log(combo);
    this.currentCombo = combo;
  }
}
