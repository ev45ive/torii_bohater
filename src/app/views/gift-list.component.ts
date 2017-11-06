import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'gift-list',
  template: `
    <p>
      gift-list works!
    </p>

    <ul class="mission-neutral">
    
          <li class="circle-mid" 
              *ngFor="let gift of gifts"
              [routerLink]="[gift.id]">
            <p> {{gift.name}} </p>
            <img src="{{gift.icon}}" width="100px">
          </li>
        
        </ul>

  `,
  styles: []
})
export class GiftListComponent implements OnInit {

  @Input()
  gifts

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
