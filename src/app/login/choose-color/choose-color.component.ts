import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit ,Renderer2  } from '@angular/core';

@Component({
  selector: 'app-choose-color',
  templateUrl: './choose-color.component.html',
  styleUrls: ['./choose-color.component.scss']
})
export class ChooseColorComponent implements OnInit {

  blue:any=true
  red:any=true
  green:any=true
  constructor(

  ) { }

  ngOnInit(

  ): void {
  }
  ClickBlue(){
    this.red=false
    this.blue='blue'
    this.green=false
  }
  ClickRed(){
    this.red='red'
    this.blue=false
    this.green=false

  }
  ClickGreen(){
    this.red=false
    this.blue=false
    this.green='green'

  }
}
