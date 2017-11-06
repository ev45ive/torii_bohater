import { Component, OnInit, Input } from '@angular/core';
import { AlldataService } from '../services/alldata.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'kid-details',
  template: `
    <my-header [name]="kid.name"></my-header>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class KidDetailsComponent implements OnInit {

  constructor(
    private service:AlldataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }   

  kid 

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.service.getKid(+params.get('id')))
      .subscribe(kid => this.kid = kid);
  }
  


}
