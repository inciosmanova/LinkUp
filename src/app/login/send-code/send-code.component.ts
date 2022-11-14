import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/_services/login.service';
import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-code',
  templateUrl: './send-code.component.html',
  styleUrls: ['./send-code.component.scss']
})
export class SendCodeComponent implements OnInit {

  // constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  constructor(private router: Router,
    public dialogRef: MatDialogRef<any>,
    private service: LoginService,
    private fb: FormBuilder) { }
  formType: boolean = false
  message: string = ''
  forgetpwd!: FormGroup
  RecaptcaData:any=''
  protected aFormGroup!: FormGroup;
  @ViewChild('langInput') langInput!: ElementRef;
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;
  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type!: 'image' | 'audio' ;
  handleSuccess(data:any) {
    this.RecaptcaData=data
   }
  ngOnInit(): void {
    this.aFormGroup = this.fb.group({
      recaptcha: ['', Validators.required]
    });
    this.createForm()
  }

  createForm() {
    this.forgetpwd = this.fb.group({
      phoneStart: ['055', Validators.required],
      phoneEnd: ['', Validators.required]
    })
  }
  SendSms() {

    debugger
    const phoneNumber = `${this.forgetpwd.value.phoneStart}${this.forgetpwd.value.phoneEnd}`
    const phoneform = {
      phonenumber: phoneNumber
    }
    if (this.forgetpwd.invalid) {
      this.formType = true;
      return
    }if(this.RecaptcaData==''){
      return} else {
      this.service.ForgetPassword(phoneform,this.RecaptcaData).subscribe({
        next: res => {
          this.router.navigate(['/choose-color/forgetPassword'], { state: { example: phoneform } })
          this.dialogRef.close()
        },
        error: error => {
          // console.log(error);
          this.message = error.error.message
          return
        }
      }

      )
    }
  }
  CloseDialog() {

  }
}
