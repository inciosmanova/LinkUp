import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) { }
  scrollToElement(): void {
    this.viewportScroller.scrollToAnchor('login');

  }
  ngOnInit(): void {
  }

}
