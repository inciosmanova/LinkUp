import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router
  ) { }
  ngOnInit(): void {
    let url=this.router.url
    console.log(url);

   if(url='/choose-color'){
   return;
   }else if(url='/choose-color'){

   }
  }

  ngOnChanges(): void {

  }

}
