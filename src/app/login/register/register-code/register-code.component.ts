import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register-code',
  templateUrl: './register-code.component.html',
  styleUrls: ['./register-code.component.scss']
})
export class RegisterCodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Submit() {
    //   Swal.fire({
    //     icon: "<?= base_url(); ?>assets/addon-media/icon_information.png",
    //     html: "Are you sure want to add this ?",
    //     showCancelButton: true,
    //     confirmButtonText: 'Yes, Sure',
    //     cancelButtonText: 'No, Cancel',
    // })
    Swal.fire({
      html:
        '<h2 class="swal2-text">Qeydiyyatınız uğurla tamamlanmışdır</h2>',
      imageUrl: '../../../../assets/login/Click.svg',
      imageHeight: 50,
      confirmButtonText: 'Cancel',
      confirmButtonColor: "#353E47 "
    })
  }

}
