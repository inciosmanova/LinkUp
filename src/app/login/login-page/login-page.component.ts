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

  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private Service: LoginService,
    private router: Router
  ) { }
  loginForm!: FormGroup
  loginType: boolean = false;
  errorMessage: string = ''
  ngOnInit(): void {
    this.createForm()
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
              Swal.fire({
                html:
                  `<h2 class="swal2-text">${res.message}</h2>`,
                imageUrl: '../../../../assets/login/Click.svg',
                imageHeight: 50,
                confirmButtonText: 'Ok',
                confirmButtonColor: "#353E47 "
              })
              return;
            }
            this.errorMessage = res.message

          }, error: error => {
            this.errorMessage = error.message


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

