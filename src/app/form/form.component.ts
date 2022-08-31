import { Component, OnInit } from '@angular/core';
import { Card } from '../models/cardModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  imagesArr:Card[]=[]

  ngOnInit(): void {
  }

  addImage(name:HTMLInputElement,url:HTMLInputElement){
  this.imagesArr.push(new Card(name.value,url.value))
  name.value='';
  url.value='';

  
  }

}
