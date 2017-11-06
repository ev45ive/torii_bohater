import { Component, OnInit, Input } from '@angular/core';
import { AlldataService } from '../services/alldata.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'gifts',
  template: `
    <p>
      gifts works!
    </p>  

    <gift-list [gifts]="(userGifts | async)"> </gift-list>
  `,
  styles: []
})
export class GiftsComponent implements OnInit {

  constructor(
    private service:AlldataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  
    kid
    userGifts

    ngOnInit(): void {
      this.route.parent.paramMap
        .switchMap((params: ParamMap) => this.service.getKid(+params.get('id')))
        .subscribe(kid => this.kid = kid);

        this.userGifts = this.service.getUserGifts(this.kid.id); 

    }


}
