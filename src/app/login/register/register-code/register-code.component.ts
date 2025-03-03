import { SwalAlertService } from './../../../_services/swal-alert.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_services/login.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { RegisterCode } from 'src/app/_model/registeruser';

@Component({
  selector: 'app-register-code',
  templateUrl: './register-code.component.html',
  styleUrls: ['./register-code.component.scss']
})
export class RegisterCodeComponent implements OnInit {
  optCode!: string
  optCodeType: boolean | any = null
  message: boolean = true
  constructor(private service: LoginService,
    private router: Router,
    private alertService: SwalAlertService) { }

  ngOnInit(): void {
  }
  EnterCode(e: any) {
    let otpCode = e.target.value;
    if (otpCode.length == 6) {
      this.optCodeType = true
    } else {
      this.optCodeType = false

    }




  }
  Submit() {
    if (this.optCodeType) {
      const optCode: RegisterCode = { "otpCode": this.optCode }
      this.service.RegisterCode(optCode).subscribe(

        res => {

          if (res.isSuccess) {

            this.router.navigate(['/counter'])
            this.alertService.SuccesAlert('Qeydiyyatınız uğurla tamamlanmışdır', 'login/Click.svg');
            return;

          } else {

          }
        },
        error => {
          this.message = false
        }
      )
    }
  }

}
