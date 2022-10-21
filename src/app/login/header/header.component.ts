import { LoginService } from 'src/app/_services/login.service';
import { AnimationEvent } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ActivationStart, Router, NavigationError, NavigationCancel, NavigationStart } from '@angular/router';
import { LoadingService } from 'src/app/_services/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  url: any = ''
  audioType = false
  @Input() title: string = '';
  audio: HTMLAudioElement = new Audio('');

  constructor(private viewportScroller: ViewportScroller,
    private service: LoginService,
    private router: Router,
  ) { }
  scrollToElement(): void {
    this.viewportScroller.scrollToAnchor('login');
  }
  ngOnInit(): void {



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
  LogOut() {
    this.service.logOut();
    this.router.navigate(['/choose-color'])
  }
}
