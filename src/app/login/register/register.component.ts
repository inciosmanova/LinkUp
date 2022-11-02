import { AlertifyService } from './../../_services/alertftJs.service';
import { SwalAlertService } from './../../_services/swal-alert.service';
import { PasswordStrengthValidator } from './../PasswordStrengthValidator';
import { Registeruser } from './../../_model/registeruser';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/_services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  btnType: boolean=false;

  constructor(private ActivatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private service: LoginService,
    private alertservice: SwalAlertService,
    private alertifyService:AlertifyService) {
  }
  registrForm!: FormGroup;
  colorId: string = ''
  clicksubmit: boolean = false
  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe((params) => {
      this.colorId = params['colorId']
    });
    this.createForm()
  }
  createForm() {
    this.registrForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phoneStart: ['051', Validators.required],
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
  MouseOverButton() {
    let animbtnoverlay = document.getElementById('animbtnoverlayregister') as HTMLElement;

    animbtnoverlay.classList.remove("activebtn");
    animbtnoverlay.classList.remove("deactivebtn");
    animbtnoverlay.style.transform = 'translateY(calc(-100% + 2px)'

  }
  Submit() {
    this.clicksubmit = true
    if (this.registrForm.invalid) {
      // this.alertifyService.set('notifier','position', 'bottom-left');

       this.alertifyService.error('Xahiş olunur xanaları düzgün və tam doldurasınız!')
      return;
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
      this.service.Registration(postForm).subscribe(result => {
        if (result.isSuccess) {
          this.router.navigate(['/register/register-code']);
          this.alertservice.SuccesAlert(result.message, 'login/Click.svg')
        } else {
          this.alertservice.FailAlert(result.message, 'login/fail.svg')
        }

      })
      // this.router.navigate(["/register/register-code"])
    }


  }

}
