import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  months = [
    'Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',
  ];
  cDateMillisecs: any;
  tDateMillisecs: any;
  year: number = 2023;
  month: number = 6;
  currentDate: any;
  targetDate: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  day: number = 31;
  constructor() { }

  ngOnInit(): void {
    this.myTimer();

  }
  myTimer() {
    this.currentDate = new Date();
    // this.targetDate = new Date(2023, 6, 31);
     this.targetDate = new Date(2022, 11, 11);
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;

    (document.getElementById('days') as HTMLElement).innerText = this.days;
    (document.getElementById('hours') as HTMLElement).innerText = this.hours;
    (document.getElementById('mins')as HTMLElement).innerText = this.minutes;
    (document.getElementById('seconds')as HTMLElement).innerText = this.seconds;

    setInterval(this.myTimer, 1000);
  }

}
