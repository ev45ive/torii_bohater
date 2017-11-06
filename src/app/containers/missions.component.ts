import { Component, OnInit, Input } from '@angular/core';
import { AlldataService } from '../services/alldata.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'missions',
  template: `
    <mission-list [missions]="(userMissions | async)"> </mission-list>
  `,
  styles: []
})
export class MissionsComponent implements OnInit {

  constructor(
    private service:AlldataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  
    kid
    userMissions

    ngOnInit(): void {
      debugger
      this.route.parent.paramMap
        .switchMap((params: ParamMap) => this.service.getKid(+params.get('id')))
        .subscribe(kid => this.kid = kid);

        this.userMissions = this.service.getUserMissions(this.kid.id); 

    }


}
