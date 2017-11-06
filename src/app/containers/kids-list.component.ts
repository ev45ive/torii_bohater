import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kids-list',
  template: `
    <p>
      kids-list works!
    </p>

    <ul>
    
          <li  
              *ngFor="let kid of kids" 
              [routerLink]="['/kid-details', kid.id]">
            <p> {{kid.name}} </p>
            
          </li>
        
     </ul>

  `,
  styles: []
})
export class KidsListComponent implements OnInit {

  constructor() { }
  
  @Input()
  kids

  ngOnInit() {
  }

}
