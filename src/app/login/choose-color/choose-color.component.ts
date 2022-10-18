import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Color } from 'src/app/_model/color';
import { LoginService } from 'src/app/_services/login.service';

@Component({
  selector: 'app-choose-color',
  templateUrl: './choose-color.component.html',
  styleUrls: ['./choose-color.component.scss']
})
export class ChooseColorComponent implements OnInit {

  color: any = true;
  blue: string = ''
  red: string = ''
  green: string = ''
  Colors: Color[] = []
  formSubmitAttempt: boolean = false;

  constructor(
    private service: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) { }
  colorsForm!: FormGroup;
  //Colors[1]?.colorId-blue
  //Colors[2]?.colorId-red
  //Colors[0]?.colorId-green
  ngOnInit() {
    this.GetColors()
    this.createForm()
  }
  createForm() {
    this.colorsForm = this.fb.group({
      colorId: ['', Validators.required],
    })
  }
  ReyestrSubmit() {
    this.formSubmitAttempt = true
    if (this.colorsForm.invalid) {
      return;
    } else {
      let colorId
       if(this.colorsForm.value.colorId=='blue'){
          colorId=this.Colors[1]?.colorId
       }else if(this.colorsForm.value.colorId=='red'){
        colorId=this.Colors[2]?.colorId
       }else if(this.colorsForm.value.colorId=='green'){
        colorId=this.Colors[0]?.colorId
       }
      this.router.navigate(['register'], { queryParams: { colorId: colorId } })
    }
    // this.colorId == '' ? console.log('Bos') : console.log(form)
  }
  GetColors() {
    this.service.GetColors().subscribe(res => {
      this.Colors = res
    })
  }


  ClickColor(typeColor: string) {
    let li = document.getElementById('li');
    let li1 = document.getElementById('li1');
    let li2 = document.getElementById('li2');

    if (typeColor == 'blue') {
      li1!.style.display = 'none'
      li2!.style.display = 'none'
    } else if (typeColor == 'red') {
      li!.style.display = 'none'
      li2!.style.display = 'none'
    } else {
      li!.style.display = 'none'
      li1!.style.display = 'none'
    }


    this.color = 'color'
  }

  @HostListener('window:scroll', ['$event']) reveal() {
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
