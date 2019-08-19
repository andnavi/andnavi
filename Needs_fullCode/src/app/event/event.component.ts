import { Component, OnInit } from '@angular/core';

declare var require: any

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public allEvents = require('../../assets/eventData.json')

  constructor() { }

  ngOnInit() {
  }

}
