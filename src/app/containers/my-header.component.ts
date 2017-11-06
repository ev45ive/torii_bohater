import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-header',
  template: `
    <header>	
    <div class="header-banner">{{name}}</div>
    <img src="assets/logo.png" class="logo">
    <nav (click)="showMenu()"> 
        <ul class="nav-main">
            <li ><a [routerLink]="['missions']">MISJE</a></li>
            <li ><a href="#">POSTĘPY</a></li>
            <li ><a [routerLink]="['gifts']">NAGRODY</a></li>
          </ul>
          <ul class="nav-add">
            <li ><a href="#">Przejdź na stronę dziecka</a></li>
            <li ><a href="#">Ustawienia profilu dziecka</a></li>
            <li ><a [routerLink]="['../../']">Przełącz dziecko</a></li>
          </ul>
      </nav>
    <label for="nav" (click)="showMenu()"></label>
  </header>
  `,
  styleUrls: ['./my-header.component.scss'],
  
})
export class MyHeaderComponent implements OnInit {

  constructor() { }

  @Input()
  name
  
  showMenu() {
    let menu = document.querySelector('nav');
    if (menu.style.display===""||menu.style.display==="none") {
      menu.style.display="block";
    } else {
      menu.style.display="none";
    }
   
  }  

  ngOnInit() {
  }

}
