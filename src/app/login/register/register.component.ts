import { PasswordStrengthValidator } from './../PasswordStrengthValidator';
import { Registeruser } from './../../_model/registeruser';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) {
  }
  registrForm!: FormGroup;
  colorId: string = ''
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
      phoneStart: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      colorId: [this.colorId || '', Validators.required],
      password: ['3', [Validators.required, PasswordStrengthValidator]],
      repeatpassword: ['', Validators.required],
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      gender: ['', Validators.required],
    })
  }

  Submit() {


    debugger
    if (this.registrForm.invalid) {

    } else {
      const phoneNumber = `${this.registrForm.value.phoneStart} ${this.registrForm.value.phoneNumber}`
      const dateOfBirth = new Date(`${this.registrForm.value.day}/ ${this.registrForm.value.month} /${this.registrForm.value.year}`);
      const postForm = {
        name: this.registrForm.value.name,
        surname: this.registrForm.value.surname,
        phoneNumber: phoneNumber,
        colorId: this.registrForm.value.colorId,
        password: this.registrForm.value.password,
        dateOfBirth: dateOfBirth,
        gender: (this.registrForm.value.gender == 'male') ? true : false
      }
      console.log(this.registrForm.value);
      // this.router.navigate(["/register/register-code"])
    }
  }

}
