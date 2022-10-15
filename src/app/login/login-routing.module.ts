import { RegisterComponent } from './register/register.component';
import { RegisterCodeComponent } from './register/register-code/register-code.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChooseColorComponent } from './choose-color/choose-color.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  { path: "", redirectTo: 'choose-color', pathMatch: 'full' },
  { path: "choose-color", component: ChooseColorComponent },
  { path: "register", component: RegisterComponent },
  { path: "counter", component: CounterComponent },
  { path: "choose-color/forgetPassword", component: ForgetPasswordComponent },
  { path: "register/register-code", component: RegisterCodeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
