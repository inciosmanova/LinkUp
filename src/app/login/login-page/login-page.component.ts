import { AlertifyService } from './../../_services/alertftJs.service';
import { SwalAlertService } from './../../_services/swal-alert.service';
import { LoginObj } from './../../_model/login';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SendCodeComponent } from './../send-code/send-code.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  btnType: boolean = false;

  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private Service: LoginService,
    private router: Router,
    private alertService: SwalAlertService,
    private AlertifyService: AlertifyService
  ) { }
  loginForm!: FormGroup
  loginType: boolean = false;
  errorMessage: string = ''
  ngOnInit(): void {
    this.createForm()
  }
  MouseLeaveButton() {

    let animbtnoverlay = document.getElementById('animbtnoverlaylogin') as HTMLElement;
    if (this.btnType == false) {
      animbtnoverlay.classList.add("activebtn");
      this.btnType = true
    } else {
      animbtnoverlay.classList.add("deactivebtn");
      this.btnType = false

    }

  }
  MouseOverButton() {
    let animbtnoverlay = document.getElementById('animbtnoverlaylogin') as HTMLElement;

    animbtnoverlay.classList.remove("activebtn");
    animbtnoverlay.classList.remove("deactivebtn");
    animbtnoverlay.style.transform = 'translateY(calc(-100% + 2px)'

  }
  createForm() {
    this.loginForm = this.fb.group({
      phoneStart: ['051', Validators.required],
      phoneEnd: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  SubmitForm() {
    if (this.loginForm.invalid) {
      this.AlertifyService.error('Xahiş olunur müvafiq sahələri doldurun')
      this.loginType = true
      return;
    } else {
      let phone = `${this.loginForm.value.phoneStart}${this.loginForm.value.phoneEnd}`
      const loginForm = {
        phone: phone,
        password: this.loginForm.value.password
      }
      this.Service.LoginUser(loginForm).subscribe(
        {
          next: res => {
            if (res.isSuccess) {
              this.router.navigate(['/counter'])
              this.alertService.SuccesAlert(res.message, 'login/Click.svg');
              return;
            } else {
              this.AlertifyService.error(res.message)

              this.errorMessage = res.message
              // this.alertService.FailAlert(res.message, 'login/fail.svg')
              // console.log(res.message);
            }


          }
        }
      )




    }






  }

  openDialog() {
    this.dialog.open(SendCodeComponent, {
      width: '350px', position: { top: '180px' }
    });
  }

}

