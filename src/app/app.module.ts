import { RoleGuard } from './login/Role.guard';
import { LoginGuard } from './login/login.guard';
import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from 'src/_interceptor/loading.interceptor';
import { UnAuthorizedInterceptor } from 'src/environments/un-authorized.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MainModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,

  ],
  providers: [
    LoginGuard,
    RoleGuard
    ,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnAuthorizedInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
