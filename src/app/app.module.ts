import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { Routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AlldataService } from './services/alldata.service';

import { AppComponent } from './app.component';

import { HomeComponent } from './containers/home.component';
import { HeroComponent } from './containers/hero.component';


import { MissionsComponent } from './containers/missions.component';
import { GiftsComponent } from './containers/gifts.component';
import { KidLoginComponent } from './containers/kid-login.component';
import { ParentLoginComponent } from './containers/parent-login.component';

import { MissionListComponent } from './views/mission-list.component';
import { GiftListComponent } from './views/gift-list.component';
import { MissionDetailsComponent } from './views/mission-details.component';
import { KidsListComponent } from './containers/kids-list.component';
import { KidDetailsComponent } from './views/kid-details.component';
import { GiftDetailsComponent } from './views/gift-details.component';
import { ExpertMissionsComponent } from './containers/expert-missions.component';
import { ExpertGiftsComponent } from './containers/expert-gifts.component';
import { ExpertListComponent } from './views/expert-list.component';
import { NewMissionComponent } from './views/new-mission.component';
import { MyHeaderComponent } from './containers/my-header.component';
import { MissionComponent } from './containers/mission.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MissionListComponent,
    HeroComponent,
    MissionsComponent,
    GiftsComponent,
    KidLoginComponent,
    ParentLoginComponent,
    GiftListComponent,
    MissionDetailsComponent,
    KidsListComponent,
    KidDetailsComponent,
    GiftDetailsComponent,
    ExpertMissionsComponent,
    ExpertGiftsComponent,
    ExpertListComponent,
    NewMissionComponent,
    MyHeaderComponent,
    MissionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [
    AlldataService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
