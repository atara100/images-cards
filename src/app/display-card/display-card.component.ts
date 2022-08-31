import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/cardModel';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  constructor() { }

  @Input()imagesArray:Card[]=[];

  ngOnInit(): void {
  }

}
