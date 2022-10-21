import { HeaderComponent } from './header/header.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title: string = '';
  url: any;
  constructor(
    private router: Router,
    // private header: HeaderComponent
  ) { }
  ngOnInit(): void {

  }
  setHeader() {
    this.url = this.router.url
    if (this.url == '/choose-color') {
      this.title = 'url1'
    } else if (this.url == '/counter') {
      this.title = 'url2'
    } else {
      this.title = 'url3'
    }
  }
  ngOnChanges(): void {

  }

}
