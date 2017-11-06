import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Mission} from '../mission';

@Component({
  selector: 'mission-list',
  template: `
    <ul class="mission-neutral">

      <li  class="circle-mid" 
          *ngFor="let mission of missions" 
          [routerLink]="[mission.id]">
        <p> {{mission.name}} </p>
        <img src="{{mission.icon}}" width="100px">
      </li>
    
    </ul>

    <button (click)="add()">Dodaj nowy </button>
  `,
  styles:[]
})
export class MissionListComponent implements OnInit {

  mission:Mission;

  add(){
    
    this.router.navigate(['kid-details/1/add-mission']);

  }

  @Input()
  missions

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
