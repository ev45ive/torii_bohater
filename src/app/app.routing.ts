import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './containers/home.component';
import { HeroComponent } from './containers/hero.component';
import { MissionsComponent } from './containers/missions.component';
import { GiftsComponent } from './containers/gifts.component';
import { MissionDetailsComponent} from './views/mission-details.component';
import { KidDetailsComponent } from './views/kid-details.component';
import { GiftDetailsComponent } from './views/gift-details.component';
import { NewMissionComponent } from './views/new-mission.component';
import { MissionComponent } from "./containers/mission.component";

const routes:Routes = [
    { path:'', component: HomeComponent },    
    { path: 'kid-details/:id', component:KidDetailsComponent, children:[
        { path:'missions', component: MissionsComponent},
        { path:'missions/:id', component: MissionComponent },
        { path:'add-mission', component: MissionComponent},
        { path:'gifts', component: GiftsComponent},
        { path:'gifts/:id', component: GiftDetailsComponent},
    ]},
    
]

export const Routing = RouterModule.forRoot(routes,{
    useHash:false
})