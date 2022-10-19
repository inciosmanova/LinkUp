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

  constructor(private ActivatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private service: LoginService) {
  }
  registrForm!: FormGroup;
  colorId: string = ''
  clicksubmit: boolean = false
  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe((params) => {
      this.colorId = params['colorId']
    });
    this.createForm()
    console.log(this.registrForm);

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

  Submit() {
    this.clicksubmit = true
    console.log(new Date());
    if (this.registrForm.invalid) {
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
      console.log(this.registrForm.value);
      this.service.Registration(postForm).subscribe(result => {
        if (result.isSuccess) {
          this.router.navigate(['/register/register-code']);
        } else {
          Swal.fire({
            html:
              `<h2 class="swal2-text">${result.message}</h2>`,
            imageUrl: '../../../../assets/login/fail.svg',
            imageHeight: 50,
            confirmButtonText: 'Cancel',
            confirmButtonColor: "#353E47 "
          })
        }

      })
      // this.router.navigate(["/register/register-code"])
    }
  }

}
