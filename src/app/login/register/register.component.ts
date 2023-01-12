import { AlertifyService } from './../../_services/alertftJs.service';
import { SwalAlertService } from './../../_services/swal-alert.service';
import { PasswordStrengthValidator } from './../PasswordStrengthValidator';
import { Registeruser } from './../../_model/registeruser';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/_services/login.service';
import Swal from 'sweetalert2';
import { ReCaptcha2Component } from 'ngx-captcha';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  btnType: boolean = false;
  @ViewChild('langInput') langInput!: ElementRef;
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;
  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type!: 'image' | 'audio';
  registrForm!: FormGroup;
  colorId: string = ''
  clicksubmit: boolean = false
  time: any;
  fisished: boolean = false
  RecaptchaToken: any = ''
  protected aFormGroup!: FormGroup;


  constructor(private ActivatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private service: LoginService,
    private alertservice: SwalAlertService,
    private alertifyService: AlertifyService) {
  }


  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe((params) => {
      this.colorId = params['colorId']
    });
    this.createForm()
  }
  handleSuccess(data: any) {
    this.RecaptchaToken = data

  }
  onDigitInput(event: any, type: number) {
    let element;
    if (event.code !== 'Backspace')
      element = event.srcElement.nextElementSibling;

    if (event.code === 'Backspace')
      element = event.srcElement.previousElementSibling;

    if (element == null)
      return;
    else
      element.focus();
  }
  createForm() {
    this.registrForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phoneStart: ['055', Validators.required],
      phoneNumber: ['', Validators.required],
      colorId: [this.colorId || '', Validators.required],
      password: ['', [Validators.required, PasswordStrengthValidator]],
      repeatpassword: ['', [Validators.required, PasswordStrengthValidator]],
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      gender: ['', Validators.required],
    })
  }
  MouseLeaveButton() {

    let animbtnoverlay = document.getElementById('animbtnoverlayregister') as HTMLElement;
    if (this.btnType == false) {
      animbtnoverlay.classList.add("activebtn");
      this.btnType = true
    } else {
      animbtnoverlay.classList.add("deactivebtn");
      this.btnType = false

    }

  }
  timer(second: any) {
    // let minute = 1;
    debugger
    this.fisished = true
    let seconds: number = second;


    // const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;

      this.time = `${second}`;
      console.log(second);

      if (seconds == 0) {
        this.fisished = false
        clearInterval(timer);
      }
    }, 1000);
  }
  MouseOverButton() {
    let animbtnoverlay = document.getElementById('animbtnoverlayregister') as HTMLElement;

    animbtnoverlay.classList.remove("activebtn");
    animbtnoverlay.classList.remove("deactivebtn");
    animbtnoverlay.style.transform = 'translateY(calc(-100% + 2px)'

  }
  Submit() {
    console.log(this.RecaptchaToken, 'submit');

    this.clicksubmit = true
    if (this.registrForm.invalid) {
      debugger
      // this.alertifyService.set('notifier','position', 'bottom-left');
      if (!this.fisished) {
        this.alertifyService.error('Xahiş olunur xanaları düzgün və tam doldurasınız!')
        this.fisished = true
        this.timer(10)

      }
      return;
    } else if (this.RecaptchaToken == '') {
      return

    } else {
      debugger
      const phoneNumber = `${this.registrForm.value.phoneStart}${this.registrForm.value.phoneNumber}`
      const dateOfBirth = new Date(`${this.registrForm.value.month} /${this.registrForm.value.day}/${this.registrForm.value.year}`);
      let gender: boolean;
      this.registrForm.value.gender == 'true' ? gender = true : gender = false
      const postForm = {
        name: this.registrForm.value.name,
        surname: this.registrForm.value.surname,
        phoneNumber: phoneNumber,
        colorId: this.registrForm.value.colorId,
        password: this.registrForm.value.password,
        dateOfBirth: dateOfBirth,
        gender: gender
      }
      this.service.Registration(postForm, this.RecaptchaToken).subscribe(result => {
        if (result.isSuccess) {
          this.router.navigate(['/register/register-code']);
          // this.alertservice.SuccesAlert(result.message, 'login/Click.svg')/
        } else {
          this.alertservice.FailAlert(result.message, 'login/fail.svg')
        }

      })
      // this.router.navigate(["/register/register-code"])
    }


  }


}
