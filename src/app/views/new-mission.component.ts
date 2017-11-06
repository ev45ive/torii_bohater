import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-mission',
  template: `
    <p>
      new-mission works!
    </p>
    <p> Wybierz misję proponowaną przez ekspertów albo stwórz własną </p>
    <expert-missions></expert-missions>
    <button (click)="add()">Stwórz własną </button>

  `,
  styles: []  
})
export class NewMissionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
