import { Component, OnInit } from '@angular/core';

declare var require: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public allEvents = require('../../assets/eventData.json')

  constructor() { }

  ngOnInit() {
  }

}
