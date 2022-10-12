import { Component, Inject, OnInit } from '@angular/core';
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
    public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }
  SendSms() {
    this.router.navigate(['/choose-color/forgetPassword'])
    this.dialogRef.close()
  }
  CloseDialog() {

  }
}
