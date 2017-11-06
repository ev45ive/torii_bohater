import { Component, OnInit } from '@angular/core';
import { AlldataService } from '../services/alldata.service';

@Component({
  selector: 'expert-gifts',
  template: `
    <p>
      expert-gifts works!
    </p>

    <expert-list [missions]="(expertGifts | async)"> </expert-list>

  `,
  styles: []
})
export class ExpertGiftsComponent implements OnInit {

  constructor(
    private service:AlldataService
  ) { }
  

    expertGifts

    ngOnInit(): void {

        this.expertGifts = this.service.getExpertGifts(); 

    }


}
