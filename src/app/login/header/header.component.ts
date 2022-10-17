import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginText: string = ''
  audioType = false
  audio: HTMLAudioElement = new Audio('../../../assets/music/Dua Lipa - New Rules.mp3');
  constructor(private viewportScroller: ViewportScroller,
    private ActivatedRoute: ActivatedRoute) { }
  scrollToElement(): void {
    this.viewportScroller.scrollToAnchor('login');
  }
  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe((params) => {
      console.log(params);


    });
    // console.log(url);
    // debugger
    //  if(url=='/choose-color'){
    //   this.loginText = ''
    //  }else if(url == '/counter'){
    //   this.loginText = 'login'
    //  }else {
    //   this.loginText = 'loading'
    //  }
    //  console.log('ff');

  }
  gradient = document.getElementById('gradient')
  onBeforeOpen(e: any) {
    this.audioType = true
    this.audio.play();
  }
  onAfterOpen(e: any) {
    this.audioType = false
    this.audio.pause();
  }
}
