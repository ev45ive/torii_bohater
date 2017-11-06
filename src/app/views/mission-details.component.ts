import { Component, OnInit, Input } from '@angular/core';
import { AlldataService } from '../services/alldata.service';

@Component({
  selector: 'mission-details',
  template: `
    <ul class="mission-neutral">
      <li class="circle-big">
        <img src="{{mission.icon}}" width="100px">>
      </li>
    </ul>
    <form class="newMissionForm">
      <input type="text" 
        placeholder="Nazwa misji" 
        [(ngModel)]="mission.name" 
        [ngModelOptions]="{standalone: true}" >
      <p>Liczba punktów</p>
      <span class="less">-</span>
      <input type="number" 
        placeholder="Liczba punktów" 
        [(ngModel)]="mission.points" 
        [ngModelOptions]="{standalone: true}" >
      <span class="more">+</span>
      <p>W które dni tygodnia?</p>
      <div class="newMissionDays">
        <label *ngFor="let day of days" >
          {{day}}
          <input type="checkbox">
        </label> 
      </div>

    </form>
    <ng-content></ng-content>
     
  `,
  styles: []
})
export class MissionDetailsComponent implements OnInit {

  constructor(
  ) { }

  @Input()
  mission 

  days=['PN', 'WT', 'ŚR', 'CZ', 'PT', 'SB', 'ND'];


  ngOnInit(): void {

  }
  

}
