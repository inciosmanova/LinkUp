
import { Injectable } from '@angular/core';
declare let alertify:any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }
confirm(message:string,okCallBack:()=>any){
  alertify.confirm(message,function(e:any){
    if(e){okCallBack()}else{}
  });
}

success(message :string){
  alertify.success(message);
}




error(message :string){
  alertify.set('notifier','position', 'bottom-left');
  alertify.error(message);
}
warning(message :string){
  alertify.warning(message);
}
message(message :string){
  alertify.message(message);
}

}
