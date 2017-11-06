import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  template: `
    <p>
      hero works! Czy routing dziala?
    </p>
    <div routerLink="/home">Powrót do home</div>
  `,
  styles: []
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
