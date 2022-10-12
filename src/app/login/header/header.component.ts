import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  audioType = false
  audio: HTMLAudioElement = new Audio('../../../assets/music/Dua Lipa - New Rules.mp3');
  constructor(private viewportScroller: ViewportScroller) { }
  scrollToElement(): void {
    this.viewportScroller.scrollToAnchor('login');
  }
  ngOnInit(): void {
  }
  onBeforeOpen(e: any) {
    this.audioType = true
    this.audio.play();
  }
  onAfterOpen(e: any) {
    this.audioType = false
    this.audio.pause();
  }
}
