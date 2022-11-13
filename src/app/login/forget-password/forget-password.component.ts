import { SwalAlertService } from './../../_services/swal-alert.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PasswordStrengthValidator } from '../PasswordStrengthValidator';
import { ReCaptcha2Component } from 'ngx-captcha';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  optCodeType: string = '';
  message: string = ''
  clicksubmit: boolean = false
  display: any;
  phoneform:any
  typeResendBtn:boolean=true
  RecaptcaData:any=''
  protected aFormGroup!: FormGroup;
  // @ViewChild('captchaElem') captchaElem!: ReCaptcha2Component;
   @ViewChild('langInput') langInput!: ElementRef;
   public captchaIsLoaded = false;
   public captchaSuccess = false;
   public captchaIsExpired = false;
   public captchaResponse?: string;
   public theme: 'light' | 'dark' = 'light';
   public size: 'compact' | 'normal' = 'normal';
   public lang = 'en';
   public type!: 'image' | 'audio' ;
  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router,
    private alertService: SwalAlertService,
    private formBuilder: FormBuilder
  ) {


    this.phoneform = this.router.getCurrentNavigation()?.extras.state
   }
  PasswordConformForm!: FormGroup

  handleSuccess(data:any) {
   this.RecaptcaData=data
  }
  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
    this.createForm()
    this.timer(2)
  }
  ReSendSms(){
    debugger
    this.service.ForgetPassword(this.phoneform.example).subscribe({
      next: res => {
        this.timer(2)
        this.typeResendBtn=false
      },
      error: error => {
        // console.log(error);
        this.message = error.error.message
        return
      }
    })
  }
  timer(minute:any) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        clearInterval(timer);
        this.typeResendBtn=true
      }
    }, 1000);
  }
  createForm() {
    this.PasswordConformForm = this.fb.group({
      otp: ['', Validators.required],
      newpassword: ['', [Validators.required, PasswordStrengthValidator]],
      repeatnewpassword: ['', [Validators.required, PasswordStrengthValidator]]
    })
  }
  EnterCode(e: any) {
    let otpCode = e.target.value;
    const form = {
      otpCode: otpCode
    }
    if (otpCode.length == 6) {
      debugger

      this.service.CheckOtp(form).subscribe({
        next: res => {
          this.optCodeType = 'true'
          console.log(res);

        },
        error: error => {
          this.optCodeType = 'false'
          this.message = error.error.message

        }
      })

    }
  }
  Submit() {
    debugger
    this.clicksubmit = true
    if (this.PasswordConformForm.invalid) {
      return;
    }if(this.RecaptcaData==''){
    return}
    else {
      const form = {
        otp: this.PasswordConformForm.value.otp,
        newPassword: this.PasswordConformForm.value.newpassword
      }
      this.service.ForgetPasswordConfirm(form,this.RecaptcaData).subscribe({
        next: res => {
          this.router.navigate(['/choose-color'])
          this.alertService.SuccesAlert(res.message, 'login/Click.svg')
        },
        error: error => {
          this.alertService.FailAlert(error.error.message, 'login/fail.svg')
        }
      })
    }
  }

}
