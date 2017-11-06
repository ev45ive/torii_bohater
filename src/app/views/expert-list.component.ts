import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'expert-list',
  template: `
    <p>
      expert-list works!
    </p>
    <ul class="mission-neutral">
    
          <li  class="circle-mid" 
              *ngFor="let mission of missions" >
            <p> {{mission.name}} </p>
            <img src="{{mission.icon}}" width="100px">
          </li>
        
        </ul>
    
  `,
  styles: []
})
export class ExpertListComponent implements OnInit {

  constructor() { }

  @Input()
  missions
  
  ngOnInit() {
  }

}
