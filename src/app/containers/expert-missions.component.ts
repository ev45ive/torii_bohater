import { Component, OnInit, Input } from '@angular/core';
import { AlldataService } from '../services/alldata.service';


@Component({
  selector: 'expert-missions',
  template: `
    <p>
      expert missions works!
    </p>  

    <expert-list [missions]="(expertMissions | async)"> </expert-list>
  `,
  styles: []
})
export class ExpertMissionsComponent implements OnInit {

  constructor(
    private service:AlldataService
  ) { }
  

    expertMissions

    ngOnInit(): void {

        this.expertMissions = this.service.getExpertMissions(); 

    }


}
