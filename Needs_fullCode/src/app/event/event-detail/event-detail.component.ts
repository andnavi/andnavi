import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from '@angular/router';

declare var require: any

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  public currentEvent;

  public allEvents = require('../../../assets/eventData.json')

  constructor(private _route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let eventId = this._route.snapshot.paramMap.get('id')
    this.getCurrentEvent(eventId)
  }

  getCurrentEvent(id){
    this.allEvents.forEach((item)=>{
      console.log(item.id,id)
      if(item.id === +id){
        this.currentEvent = item
      }
    })
  }

}
