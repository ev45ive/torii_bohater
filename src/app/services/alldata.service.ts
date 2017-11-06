import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import 'rxjs/add/observable/of'
import { Mission } from "../mission";

@Injectable()
export class AlldataService {

  constructor(private http:HttpClient) { }
  private url = 'http://localhost:3000'

// PARENT with kids

  private parent$ = new BehaviorSubject([])

  fetchParent(id){
    this.http.get(this.url+'/parents/'+id+'?_embed=kids ')
    .subscribe( (parent:any) => this.parent$.next(parent))
  }
  
  getParent(id){
    this.fetchParent(id)
    return this.parent$.asObservable()
  }

// KID

  private kid$ = new BehaviorSubject([])

  fetchKid(id){
    this.http.get(this.url+'/kids/'+id)
    .subscribe( (kid:any) => this.kid$.next(kid))
  }

  getKid(id){
    this.fetchKid(id)
    return this.kid$.asObservable()
  }

// USER MISSIONS

  private userMission$ = new BehaviorSubject([])

  fetchUserMissions(kidId){
    this.http.get(this.url+'/kids/'+kidId+'/userMissions')
    .subscribe( (mission:any) => this.userMission$.next(mission))
  }

  getUserMissions(kidId){
    this.fetchUserMissions(kidId)
    return this.userMission$.asObservable()
  }

  updateMission(mission){
    if(!mission.id){
      this.http.post(this.url+'/userMissions/',mission)
      .subscribe((mission:Mission)=>{
        this.userMissio$.next([mission])
        // this.fetchUserMissions(mission.id)
      })    
    }else{
      this.http.put(this.url+'/userMissions/'+mission.id,mission)
      .subscribe(()=>{
        this.fetchUserMissions(mission.id)
      })
    }

  }

  
  private userMissio$ = new BehaviorSubject([])

  getUserMission(missionId){
    // this.fetchUserMission(missionId)
    // return this.userMissio$.asObservable()
    if(!missionId){
      return Observable.of(<Mission>{
        icon: 'assets/gift.svg'
      })
    }

    return this.http.get<Mission>(this.url+'/userMissions/'+missionId)
  }
  
  fetchUserMission(missionId){
    this.http.get(this.url+'/userMissions/'+missionId)
    .subscribe( (mission:any) => this.userMissio$.next(mission))
  }


// USER GIFTS

private userGift$ = new BehaviorSubject([])

  fetchUserGifts(kidId){
    this.http.get(this.url+'/kids/'+kidId+'/userGifts')
    .subscribe( (gift:any) => this.userGift$.next(gift))
  }

  getUserGifts(kidId){
    this.fetchUserGifts(kidId)
    return this.userGift$.asObservable()
  }

  private userGif$ = new BehaviorSubject([])
  
    getUserGift(giftId){
      this.fetchUserGift(giftId)
      return this.userGif$.asObservable()
    }
    
    fetchUserGift(giftId){
      this.http.get(this.url+'/userGifts/'+giftId)
      .subscribe( (gift:any) => this.userGif$.next(gift))
    }

    updateGift(gift){
      this.http.put(this.url+'/userGifts/'+gift.id,gift)
      .subscribe(()=>{
        this.fetchUserGift(gift.id)
      })
    }

// EXPERT MISSIONS

  private expertMission$ = new BehaviorSubject([])
  
  fetchExpertMissions(){
    this.http.get(this.url+'/expertMissions')
    .subscribe( (expertMission:any) => this.expertMission$.next(expertMission))
  }

  getExpertMissions(){
    this.fetchExpertMissions()
    return this.expertMission$.asObservable()
  }

  // EXPERT GIFTS

  private expertGift$ = new BehaviorSubject([])
  
  fetchExpertGifts(){
    this.http.get(this.url+'/expertGifts')
    .subscribe( (expertGift:any) => this.expertGift$.next(expertGift))
  }

  getExpertGifts(){
    this.fetchExpertGifts()
    return this.expertGift$.asObservable()
  }
  

}
