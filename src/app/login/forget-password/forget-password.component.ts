import { Router } from '@angular/router';
import { LoginService } from 'src/app/_services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordStrengthValidator } from '../PasswordStrengthValidator';
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
  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private router: Router
  ) { }
  PasswordConformForm!: FormGroup

  ngOnInit(): void {
    this.createForm()
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

      this.service.RegisterCode(form).subscribe({
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
    } {
      const form = {
        otp: this.PasswordConformForm.value.otp,
        newPassword: this.PasswordConformForm.value.newpassword
      }
      this.service.ForgetPasswordConfirm(form).subscribe({
        next: res => {
          console.log(res);
          this.router.navigate(['/choose-color'])
          Swal.fire({
            html:
              `<h2 class="swal2-text">${res.message}</h2>`,
            imageUrl: '../../../../assets/login/Click.svg',
            imageHeight: 50,
            confirmButtonText: 'Cancel',
            confirmButtonColor: "#353E47 "
          })
        },
        error: error => {
          console.log(error);
          Swal.fire({
            html:
              `<h2 class="swal2-text">${error.error.message}</h2>`,
            imageUrl: '../../../../assets/login/Click.svg',
            imageHeight: 50,
            confirmButtonText: 'Cancel',
            confirmButtonColor: "#353E47 "
          })

        }
      })
    }
  }

}
