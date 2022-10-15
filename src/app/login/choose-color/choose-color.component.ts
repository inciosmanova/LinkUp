import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit ,Renderer2  } from '@angular/core';

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



  // window.addEventListener("scroll", reveal);

  @HostListener('window:scroll', ['$event'])    reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
}
