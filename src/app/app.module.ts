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
    // { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
