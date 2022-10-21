
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class SwalAlertService {
  // succes
  SuccesAlert(message: string, imgUrl: string) {
    Swal.fire({
      html:
        `<h2 class="swal2-text">${message}</h2>`,
      imageUrl: `../../../../assets/${imgUrl}`,
      imageHeight: 50,
      confirmButtonText: 'Ok',
      confirmButtonColor: "#353E47 "
    })
  }
  //Fail
  FailAlert(message: string, imgUrl: string) {
    Swal.fire({
      html:
        `<h2 class="swal2-text">${message}</h2>`,
      imageUrl: `../../../../assets/${imgUrl}`,
      imageHeight: 50,
      confirmButtonText: 'Cancel',
      confirmButtonColor: "#353E47 "
    })
  }
}
