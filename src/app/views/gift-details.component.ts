import { Component, OnInit, Input } from '@angular/core';
import { AlldataService } from '../services/alldata.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'gift-details',
  template: `
    <p>
      gift-details works!
    </p>

    <ul class="mission-neutral">
      <li class="circle-big">
        <img src="{{gift.icon}}" width="100px">>
      </li>
    </ul>
    <form class="newMissionForm">
      <input type="text" 
        placeholder="Nazwa nagrody" 
        [(ngModel)]="gift.name" 
        [ngModelOptions]="{standalone: true}" >
      <p>Liczba punktów</p>
      <span class="less">-</span>
      <input type="number" 
        placeholder="Liczba punktów" 
        [(ngModel)]="gift.points" 
        [ngModelOptions]="{standalone: true}" >
      <span class="more">+</span>


    </form>

    <button (click)="update()" class="add">DODAJ</button>
     
  `,
  styles: []
})
export class GiftDetailsComponent implements OnInit {

  constructor(
    private service:AlldataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  gift 

  update(){
    this.service.updateGift(this.gift)
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.service.getUserGift(+params.get('id')))
      .subscribe(gift => this.gift = gift);
  }
  

}
