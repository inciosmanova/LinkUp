import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChooseColorComponent } from './choose-color/choose-color.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: 'choose-color', pathMatch: 'full' },
  { path: "choose-color", component: ChooseColorComponent },
  { path: "register", component: RegisterComponent },
  { path: "choose-color/forgetPassword", component: ForgetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
