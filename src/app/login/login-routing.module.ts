import { RoleGuard } from './Role.guard';
import { LoginGuard } from './login.guard';
import { RegisterComponent } from './register/register.component';
import { RegisterCodeComponent } from './register/register-code/register-code.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChooseColorComponent } from './choose-color/choose-color.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  { path: "", redirectTo: 'counter', pathMatch: 'full' },
  { path: "choose-color", component: ChooseColorComponent, canActivate: [RoleGuard]},
  { path: "register", component: RegisterComponent, },
  { path: "counter", component: CounterComponent, canActivate: [LoginGuard] },
  { path: "choose-color/forgetPassword", component: ForgetPasswordComponent, canActivate: [RoleGuard]},
  { path: "register/register-code", component: RegisterCodeComponent, canActivate: [RoleGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
