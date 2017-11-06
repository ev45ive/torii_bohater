import { Component, OnInit } from '@angular/core';
import { AlldataService } from '../services/alldata.service';

@Component({
  selector: 'home',
  template: `

    <p>Witaj {{(parent | async).email}}
    <kids-list [kids]="(parent | async).kids" > </kids-list>
   
    `,
    styles: []
})
export class HomeComponent implements OnInit {

  constructor(
    private service:AlldataService,
    
  ) { }
  
    parent
    kid
  
    ngOnInit() {
      this.parentLogin('1');
      this.parent=this.service.getParent(localStorage.loggedParent);
      this.kid = this.service.getKid("1");
      
    }

    parentLogin(parentEmail){
      localStorage.setItem('loggedParent',parentEmail)
    }
    
}
