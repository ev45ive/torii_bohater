import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/zip'
import 'rxjs/add/operator/switchMap'
import { AlldataService } from "../services/alldata.service";
import { Mission } from "../mission";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'mission',
  template: `
    <mission-details [mission]="mission">
      <button (click)="update()" class="add">DODAJ</button>
    </mission-details>
  `,
  styles: []
})
export class MissionComponent implements OnInit {

  constructor(
    private service:AlldataService,
    private route: ActivatedRoute
  ) { }

  mission:Mission
  kidId
  
  update(){
    this.mission.kidId = this.mission.kidId || this.kidId

    this.service.updateMission(this.mission)
  }

  ngOnInit() {
  
    this.route.parent.paramMap
    .subscribe((params:ParamMap)=>{
      this.kidId = params.get('id')
    })

    this.route.paramMap
      .switchMap((params: ParamMap) => {
          let id = parseInt(params.get('id'))
          return this.service.getUserMission(id)
      })
      .subscribe(mission => {
        this.mission = mission
      });
  }

}
