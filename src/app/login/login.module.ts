import { AutoTabDirective } from './../_directive/auto-tap.directive';
import { LoadingInterceptor } from 'src/_interceptor/loading.interceptor';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChooseColorComponent } from './choose-color/choose-color.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SendCodeComponent } from './send-code/send-code.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegisterComponent } from './register/register.component';
import { RegisterCodeComponent } from './register/register-code/register-code.component';
import { CounterComponent } from './counter/counter.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ChooseColorComponent,
    LoginPageComponent,
    SendCodeComponent,
    ForgetPasswordComponent,
    RegisterComponent,
    RegisterCodeComponent,
    CounterComponent,
    AutoTabDirective

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [


    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ]
})
export class LoginModule { }
